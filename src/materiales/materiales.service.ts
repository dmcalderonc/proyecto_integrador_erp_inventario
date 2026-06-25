import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateMaterialDto } from './dto/create-material.dto';
import { Material } from './material.entity';
import { Categoria } from '../categorias/categoria.entity';
import { AuditoriaService } from '../auditoria/auditoria.service';

@Injectable()
export class MaterialesService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly auditoriaService: AuditoriaService,
  ) { }

  async create(createMaterialDto: CreateMaterialDto, usuarioId: number): Promise<Material> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const categoria = await queryRunner.manager.findOne(Categoria, {
        where: { id: createMaterialDto.categoria_id },
        lock: { mode: 'pessimistic_write' },
      });

      if (!categoria) {
        throw new NotFoundException(`La categoría con ID ${createMaterialDto.categoria_id} no existe.`);
      }

      const ultimoMaterial = await queryRunner.manager.findOne(Material, {
        where: { categoria: { id: categoria.id } },
        order: { id: 'DESC' },
      });

      let consecutivo = 1;
      if (ultimoMaterial && ultimoMaterial.sku) {
        const partesSku = ultimoMaterial.sku.split('-');
        if (partesSku.length === 2) {
          const ultimoNumero = parseInt(partesSku[1], 10);
          if (!isNaN(ultimoNumero)) {
            consecutivo = ultimoNumero + 1;
          }
        }
      }

      const numeroFormateado = String(consecutivo).padStart(4, '0');
      const nuevoSku = `${categoria.prefijo.toUpperCase()}-${numeroFormateado}`;

      
      const nuevoMaterial = queryRunner.manager.create(Material, {
        nombre: createMaterialDto.nombre,
        descripcion: createMaterialDto.descripcion,
        sku: nuevoSku,
        unidad_medida: createMaterialDto.unidad_medida,
        categoria: categoria,
      });

      const materialGuardado = await queryRunner.manager.save(nuevoMaterial);

      await queryRunner.commitTransaction();

      try {
        await this.auditoriaService.registrarAccion(
          usuarioId.toString(),
          'CREAR_MATERIAL',
          'Materiales',
          {
            mensaje: 'Material autogenerado con éxito',
            skuGenerado: materialGuardado.sku,
            nombreMaterial: materialGuardado.nombre,
            categoria: categoria.nombre
          }
        );
      } catch (auditError) {
        console.error('Error al registrar en el módulo de auditoría (MongoDB):', auditError);
      }

      return materialGuardado;

    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}