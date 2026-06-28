import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Material } from '../../material/entities/material.entity';
import { Bodega } from '../../bodega/entities/bodega.entity';

@Entity('stock_bodega')
export class Inventario {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  material_id?: number;

  @Column()
  bodega_id?: number;

  @Column({ type: 'int', default: 0 })
  cantidad_disponible?: number;

  @Column({ type: 'int', default: 0 })
  cantidad_reservada?: number;

  @ManyToOne(() => Material, (material) => material.id)
  @JoinColumn({ name: 'material_id' })
  material: Material;

  @ManyToOne(() => Bodega, (bodega) => bodega.id)
  @JoinColumn({ name: 'bodega_id' })
  bodega: Bodega;
}