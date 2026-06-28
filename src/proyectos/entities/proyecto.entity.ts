import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Bodega } from '../../bodegas/bodegas.entity';

export enum EstadoProyecto {
  ACTIVO = 'ACTIVO',
  CERRADO = 'CERRADO',
}

@Entity('proyectos')
export class Proyecto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 200 })
  nombre: string;

  @Column({ name: 'codigo_proyecto', type: 'varchar', length: 50, unique: true })
  codigoProyecto: string;

  @Column({ name: 'fecha_inicio', type: 'date' })
  fechaInicio: Date;

  @Column({ type: 'enum', enum: EstadoProyecto, default: EstadoProyecto.ACTIVO })
  estado: EstadoProyecto;

  @OneToOne(() => Bodega, (bodega) => bodega.proyecto)
  bodega: Bodega;
}