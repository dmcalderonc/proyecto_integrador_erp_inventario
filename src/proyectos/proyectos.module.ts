import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { ProyectosService } from './proyectos.service';
import { ProyectosController } from './proyectos.controller';
import { Proyecto } from './proyecto.entity'; 
import { BodegasModule } from '../bodegas/bodegas.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Proyecto]), 
    BodegasModule,                        
  ],
  controllers: [ProyectosController],
  providers: [ProyectosService],
  exports: [ProyectosService],
})
export class ProyectosModule {}