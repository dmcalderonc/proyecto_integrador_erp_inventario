import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { MovimientoInventario, TipoMovimiento, EstadoMovimiento } from './entities/movimiento-inventario.entity';
import { DetalleMovimiento } from './entities/detalle-movimiento.entity';
import { Inventario } from '../inventario/inventario.entity'; 
import { AuditoriaService } from '../auditoria/auditoria.service';

@Injectable()
export class MovimientosService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly auditoriaService: AuditoriaService,
  ) {}

  async registrarMovimiento(dto: CreateMovimientoDto, usuarioId: string) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    // READ COMMITTED con transaccionalidad estricta
    await queryRunner.startTransaction('READ COMMITTED');

    try {
      // 1. Validaciones Lógicas de Bodegas
      if (dto.tipo === TipoMovimiento.INGRESO && !dto.bodegaDestinoId) {
        throw new BadRequestException('El INGRESO requiere una bodega de destino obligatoria.');
      }
      if (dto.tipo === TipoMovimiento.EGRESO && !dto.bodegaOrigenId) {
        throw new BadRequestException('El EGRESO requiere una bodega de origen obligatoria.');
      }
      if (dto.tipo === TipoMovimiento.TRANSFERENCIA && (!dto.bodegaOrigenId || !dto.bodegaDestinoId)) {
        throw new BadRequestException('La TRANSFERENCIA requiere bodega de origen y destino.');
      }

      // 2. Crear Cabecera
      const movimiento = queryRunner.manager.create(MovimientoInventario, {
        tipo: dto.tipo,
        observaciones: dto.observaciones,
        usuarioId,
        bodegaOrigenId: dto.bodegaOrigenId,
        bodegaDestinoId: dto.bodegaDestinoId,
        estado: EstadoMovimiento.PROCESADO,
      });

      const savedMovimiento = await queryRunner.manager.save(movimiento);
      const auditoriaSnapshot: any[] = []; // <-- CORRECCIÓN: Definido como : any[] para quitar error 'never'

      // 3. Procesar Detalles iterando bajo Bloqueo Pesimista
      const detalles = dto.detalles || []; // <-- CORRECCIÓN: Fallback seguro si llega undefined
      
      for (const detalleDto of detalles) {
        const cantidad = detalleDto.cantidad as number; // <-- CORRECCIÓN: Aseguramos el tipado
        const materialId = detalleDto.materialId as string; // <-- CORRECCIÓN: Aseguramos el tipado

        const detalle = queryRunner.manager.create(DetalleMovimiento, {
          movimientoId: savedMovimiento.id,
          materialId: materialId,
          cantidad: cantidad,
        });
        await queryRunner.manager.save(detalle);

        let stockOrigen: Inventario | null = null;
        let stockDestino: Inventario | null = null;

        // A. Manejo de EGRESO / TRANSFERENCIA (Resta de stockOrigen)
        if (dto.tipo === TipoMovimiento.EGRESO || dto.tipo === TipoMovimiento.TRANSFERENCIA) {
          stockOrigen = await queryRunner.manager.findOne(Inventario, {
            where: { bodega_id: dto.bodegaOrigenId, material_id: Number(materialId) },
            lock: { mode: 'pessimistic_write' },
          });

          if (!stockOrigen || Number(stockOrigen.cantidad_disponible) < cantidad) {
            throw new BadRequestException(`Stock insuficiente (Material ID: ${materialId}) en la bodega de origen.`);
          }
        }

        // B. Manejo de INGRESO / TRANSFERENCIA (Suma en stockDestino)
        if (dto.tipo === TipoMovimiento.INGRESO || dto.tipo === TipoMovimiento.TRANSFERENCIA) {
          stockDestino = await queryRunner.manager.findOne(Inventario, {
            where: { bodega_id: dto.bodegaDestinoId, material_id: Number(materialId) },
            lock: { mode: 'pessimistic_write' },
          });

          if (!stockDestino) {
            stockDestino = queryRunner.manager.create(Inventario, {
              bodega_id: dto.bodegaDestinoId,
              material_id: Number(materialId),
              cantidad_disponible: 0,
              cantidad_reservada: 0,
            });
          }
        }

        // C. Capturar Stock ANTES del movimiento para auditoría
        const stockAntes = {
          origen: stockOrigen ? Number(stockOrigen.cantidad_disponible) : null,
          destino: stockDestino ? Number(stockDestino.cantidad_disponible) : null,
        };

        // D. Aplicar las Matemáticas
        if (stockOrigen) {
          stockOrigen.cantidad_disponible = Number(stockOrigen.cantidad_disponible) - cantidad;
          await queryRunner.manager.save(Inventario, stockOrigen);
        }
        if (stockDestino) {
          stockDestino.cantidad_disponible = Number(stockDestino.cantidad_disponible) + cantidad;
          await queryRunner.manager.save(Inventario, stockDestino);
        }

        // E. Capturar Stock DESPUÉS del movimiento para auditoría
        auditoriaSnapshot.push({
          materialId: materialId,
          cantidadMovida: cantidad,
          stockAntes,
          stockDespues: {
            origen: stockOrigen ? Number(stockOrigen.cantidad_disponible) : null,
            destino: stockDestino ? Number(stockDestino.cantidad_disponible) : null,
          }
        });
      }

      // 4. Finalizar Transacción (Confirmar en PostgreSQL)
      await queryRunner.commitTransaction();

      // 5. Auditoría Inmutable en MongoDB (Disparo asíncrono)
      this.auditoriaService.registrarAccion(
        usuarioId,                                    
        `MOVIMIENTO_INVENTARIO_${dto.tipo}`,          
        'Movimientos',                                
        {                                             
          movimientoId: savedMovimiento.id,
          tipo: dto.tipo,
          bodegas: { origen: dto.bodegaOrigenId, destino: dto.bodegaDestinoId },
          observaciones: dto.observaciones,
          trazabilidad_stock: auditoriaSnapshot
        }
      );

      return savedMovimiento;

    } catch (error) {
      await queryRunner.rollbackTransaction(); 
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException(`Fallo crítico en el motor transaccional: ${error.message}`);
    } finally {
      await queryRunner.release(); 
    }
  }
}