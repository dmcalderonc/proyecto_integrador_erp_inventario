import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialesService } from './materiales.service';
import { MaterialesController } from './materiales.controller';
import { Material } from './material.entity';
import { Categoria } from '../categorias/categoria.entity';
import { AuditoriaModule } from '../auditoria/auditoria.module'; // Módulo de MongoDB de Dev 1

@Module({
  imports: [
    TypeOrmModule.forFeature([Material, Categoria]),
    AuditoriaModule, // Importamos el servicio de auditoría externo
  ],
  controllers: [MaterialesController],
  providers: [MaterialesService],
})
export class MaterialesModule {}