import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
  ForbiddenException, 
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Requirement, RequirementStatus } from './entities/requirement.entity';
import { CreateRequirementDto } from './dto/create-requirement.dto';
import { UpdateRequirementDto } from './dto/update-requirement.dto';
import { Inventario } from '../inventario/inventario.entity';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class RequirementsService {
  private readonly BODEGA_CENTRAL_ID = 1;

  constructor(
    @InjectRepository(Requirement)
    private reqRepository: Repository<Requirement>,
    private dataSource: DataSource,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(createDto: CreateRequirementDto, userId: string) {
    const requirement = this.reqRepository.create({
      proyectoId: createDto.proyectoId,
      usuarioSolicitanteId: userId,
      estado: RequirementStatus.PENDIENTE,
      detalles: createDto.detalles.map((detalle) => ({
        materialId: detalle.materialId,
        cantidadSolicitada: detalle.cantidadSolicitada,
      })),
    });

    return await this.reqRepository.save(requirement);
  }

  async updateStatus(
    id: number,
    updateDto: UpdateRequirementDto,
    userId: string,
    rol: string, 
  ) {
    if (
      (updateDto.estado === RequirementStatus.APROBADO || 
       updateDto.estado === RequirementStatus.RECHAZADO) && 
      rol !== 'ADMIN'
    ) {
      throw new ForbiddenException('Acceso denegado: Solo un Administrador puede Aprobar o Rechazar requerimientos.');
    }

    const req = await this.reqRepository.findOne({
      where: { id },
      relations: { detalles: true, proyecto: { bodega: true } },
    });

    if (!req) {
      throw new NotFoundException(`Requerimiento #${id} no encontrado.`);
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (updateDto.estado === RequirementStatus.APROBADO && req.estado === RequirementStatus.PENDIENTE) {
        for (const det of req.detalles) {
          
          // 🚨 NUEVO: Verificamos la decisión individual del administrador para este ítem
          const decisionAdmin = updateDto.detallesEvaluar?.find(d => d.id === det.id);

          if (decisionAdmin && decisionAdmin.accion === 'RECHAZADO') {
            det.estadoItem = 'RECHAZADO' as any;
            await queryRunner.manager.save(det);
            continue; // Saltamos al siguiente ítem sin tocar stock ni compras
          }

          // Si el ítem fue aprobado (o no venía en el arreglo, asumimos aprobación), hacemos la validación de stock y Split
          const stock = await queryRunner.manager.findOne(Inventario, {
            where: {
              materialId: Number(det.materialId),
              bodegaId: this.BODEGA_CENTRAL_ID,
            },
          });

          const cantidadReq = Number(det.cantidadSolicitada);
          const disponible = stock ? (stock.cantidad_disponible || 0) : 0;

          if (disponible < cantidadReq) {
            const cantidadFaltante = cantidadReq - disponible;

            if (disponible > 0) {
              stock.cantidad_disponible -= disponible;
              stock.cantidad_reservada = (stock.cantidad_reservada || 0) + disponible;
              await queryRunner.manager.save(stock);

              det.cantidadSolicitada = disponible;
              det.estadoItem = 'APROBADO_BODEGA' as any; 
              await queryRunner.manager.save(det);

              const nuevoDetalleFaltante = queryRunner.manager.create(det.constructor, {
                ...det, 
                id: undefined, 
                cantidadSolicitada: cantidadFaltante,
                cantidadDespachada: 0,
                estadoItem: 'EN_COMPRAS', 
              });
              await queryRunner.manager.save(nuevoDetalleFaltante);

            } else {
              det.estadoItem = 'EN_COMPRAS' as any;
              await queryRunner.manager.save(det);
            }
            
            this.eventEmitter.emit('requerimiento.en_compras', {
              requirementId: req.id,
              materialId: det.materialId,
              cantidad: cantidadFaltante, 
              proyectoId: req.proyecto?.id,
            });
            
          } else {
            stock.cantidad_disponible -= cantidadReq;
            stock.cantidad_reservada = (stock.cantidad_reservada || 0) + cantidadReq;
            await queryRunner.manager.save(stock);
            
            det.estadoItem = 'APROBADO_BODEGA' as any;
            await queryRunner.manager.save(det);
          }
        }

        req.estado = RequirementStatus.APROBADO;

      } else if (updateDto.estado === RequirementStatus.ATENDIDO && req.estado === RequirementStatus.APROBADO) {
        // ... (Tu lógica de despacho intacta)
        const bodegaDestinoId = req.proyecto?.bodega?.id;

        for (const det of req.detalles) {
          // Solo despachamos ítems que estén aprobados para bodega
          if ((det as any).estadoItem === 'RECHAZADO' || (det as any).estadoItem === 'EN_COMPRAS') continue;

          const cantidadDespachada = Number(det.cantidadDespachada || det.cantidadSolicitada);
          const materialId = Number(det.materialId);

          await queryRunner.manager.decrement(
            Inventario,
            { materialId, bodegaId: this.BODEGA_CENTRAL_ID },
            'cantidad_reservada',
            cantidadDespachada,
          );

          if (bodegaDestinoId) {
            const stockDestino = await queryRunner.manager.findOne(Inventario, {
              where: { materialId, bodegaId: Number(bodegaDestinoId) },
            });

            if (stockDestino) {
              stockDestino.cantidad_disponible = (stockDestino.cantidad_disponible || 0) + cantidadDespachada;
              await queryRunner.manager.save(stockDestino);
            } else {
              const nuevoStock = queryRunner.manager.create(Inventario, {
                materialId,
                bodegaId: Number(bodegaDestinoId),
                cantidad_disponible: cantidadDespachada,
                cantidad_reservada: 0,
              });
              await queryRunner.manager.save(nuevoStock);
            }
          }

          det.cantidadDespachada = cantidadDespachada;
          det.estadoItem = 'DESPACHADO' as any;
          await queryRunner.manager.save(det);
        }

        await this.recalcularEstadoMaestro(req.id, queryRunner.manager);

      } else if (updateDto.estado === RequirementStatus.RECHAZADO && req.estado !== RequirementStatus.RECHAZADO && req.estado !== RequirementStatus.ATENDIDO) {
        // ... (Tu lógica de rechazo general intacta)
        if (req.estado === RequirementStatus.APROBADO || req.estado === RequirementStatus.PARCIALMENTE_ATENDIDO) {
          for (const det of req.detalles) {
            if ((det as any).estadoItem === 'RECHAZADO') continue;

            const cantidadReservada = Number(det.cantidadDespachada || det.cantidadSolicitada);

            await queryRunner.manager.decrement(
              Inventario,
              { materialId: Number(det.materialId), bodegaId: this.BODEGA_CENTRAL_ID },
              'cantidad_reservada',
              cantidadReservada,
            );

            await queryRunner.manager.increment(
              Inventario,
              { materialId: Number(det.materialId), bodegaId: this.BODEGA_CENTRAL_ID },
              'cantidad_disponible',
              cantidadReservada,
            );
            det.estadoItem = 'RECHAZADO' as any;
            await queryRunner.manager.save(det);
          }
        }

        req.estado = RequirementStatus.RECHAZADO;

      } else {
        throw new BadRequestException(
          `Transición no válida: ${req.estado} → ${updateDto.estado}`,
        );
      }

      await queryRunner.manager.save(req);
      await queryRunner.commitTransaction();

      return this.reqRepository.findOne({
        where: { id },
        relations: { detalles: true, proyecto: true },
      });

    } catch (error) {
      if (queryRunner.isTransactionActive) {
        await queryRunner.rollbackTransaction();
      }
      throw error;
    } finally {
      await queryRunner.release();
    }
  } 
  async findAll(userId?: string, rol?: string) {
    const where: any = {};
    
    if (rol === 'SOLICITANTE' && userId) {
      where.usuarioSolicitanteId = userId;
    }
    
    if (rol === 'COMPRADOR') {
      where.estado = RequirementStatus.APROBADO;
    }

    return await this.reqRepository.find({
      where,
      relations: { detalles: true, proyecto: true, usuarioSolicitante: true },
    });
  }

  async findOne(id: number, userId?: string, rol?: string) {
    const where: any = { id };
    if (rol === 'SOLICITANTE' && userId) {
      where.usuarioSolicitanteId = userId;
    }
    return await this.reqRepository.findOne({
      where,
      relations: { detalles: { material: true }, proyecto: true },
    });
  }

  async remove(id: number) {
    return await this.reqRepository.delete(id);
  }
// 🔥 Despertador FIFO: Se ejecuta automáticamente al recibir una Orden de Compra
  // 🔥 Despertador FIFO: Se ejecuta automáticamente al recibir una Orden de Compra
  @OnEvent('orden.recibida')
  async handleOrdenRecibida(payload: { detalles: { materialId: number, cantidad: number }[] }) {
    
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // ✅ Solución: Declaramos el Set explícitamente como número y fuera del bucle
      const requerimientosModificadosIds = new Set<number>();

      for (const itemIngresado of payload.detalles) {
        let stockRestanteParaAsignar = itemIngresado.cantidad;

        const requerimientos = await queryRunner.manager.find(Requirement, {
          relations: { detalles: true },
          order: { id: 'ASC' }, 
        });

        for (const req of requerimientos) {
          if (stockRestanteParaAsignar <= 0) break;

          const detallesDormidos = req.detalles.filter(d => 
            Number(d.materialId) === itemIngresado.materialId && 
            (d as any).estadoItem === 'EN_COMPRAS'
          );

          for (const det of detallesDormidos) {
            if (stockRestanteParaAsignar <= 0) break;

            const cantidadNecesitada = Number(det.cantidadSolicitada);

            if (stockRestanteParaAsignar >= cantidadNecesitada) {
              stockRestanteParaAsignar -= cantidadNecesitada;
              
              (det as any).estadoItem = 'APROBADO_BODEGA';
              await queryRunner.manager.save(det);

              const stockBodega = await queryRunner.manager.findOne(Inventario, {
                where: { materialId: itemIngresado.materialId, bodegaId: this.BODEGA_CENTRAL_ID }
              });

              if (stockBodega) {
                stockBodega.cantidad_disponible = (stockBodega.cantidad_disponible || 0) - cantidadNecesitada;
                stockBodega.cantidad_reservada = (stockBodega.cantidad_reservada || 0) + cantidadNecesitada;
                await queryRunner.manager.save(stockBodega);
              }

              // Requerimiento modificado
              requerimientosModificadosIds.add(req.id);
            } 
          }
        }
      }

      // ✅ Solución: Iteramos sobre el Set para recalcular los estados maestros
      for (const idReq of requerimientosModificadosIds) {
        await this.recalcularEstadoMaestro(idReq, queryRunner.manager);
      }

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  
  }
  // 🔥 Máquina de Estados Dinámica (Punto 3)
  private async recalcularEstadoMaestro(reqId: number, manager: any) {
    const req = await manager.findOne(Requirement, {
      where: { id: reqId },
      relations: { detalles: true },
    });

    if (!req || !req.detalles || req.detalles.length === 0) return;

    const total = req.detalles.length;
    const rechazados = req.detalles.filter(d => (d as any).estadoItem === 'RECHAZADO').length;
    const despachados = req.detalles.filter(d => (d as any).estadoItem === 'DESPACHADO').length;
    
    // Si todos fueron rechazados
    if (rechazados === total) {
      req.estado = RequirementStatus.RECHAZADO;
    } 
    // Si todo lo que NO fue rechazado ya se despachó (Ej: 3 despachados y 2 rechazados = Terminado)
    else if (despachados > 0 && (despachados + rechazados === total)) {
      req.estado = RequirementStatus.ATENDIDO;
    } 
    // Si ya se despachó algo, pero aún faltan cosas por entregar o comprar
    else if (despachados > 0 && (despachados + rechazados < total)) {
      req.estado = RequirementStatus.PARCIALMENTE_ATENDIDO;
    } 
    // Si nada se ha despachado aún, pero al menos hay ítems aprobados o en compras
    else if (despachados === 0 && rechazados < total) {
      req.estado = RequirementStatus.APROBADO;
    }

    await manager.save(req);
  }
}
