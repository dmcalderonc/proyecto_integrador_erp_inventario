import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { OrdenCompra } from './orden-compra.entity';
// Importa tu entidad Material aquí

@Entity('detalle_orden_compra')
export class DetalleOrdenCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 12, scale: 2 })
  cantidad: number;

  @Column('decimal', { precision: 12, scale: 2 })
  precioUnitario: number;

  @ManyToOne(() => OrdenCompra, (orden) => orden.detalles)
  ordenCompra: OrdenCompra;

  // @ManyToOne(() => Material, ...) // Descomenta cuando conectes materialId
  // materialId: number;
}