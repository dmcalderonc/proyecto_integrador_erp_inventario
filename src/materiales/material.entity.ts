import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, AfterLoad } from 'typeorm';
import { Categoria } from '../categorias/categoria.entity';
import { UnidadMedida } from '../unidades-medida/unidad-medida.entity';

@Entity('materiales')
export class Material {
  @PrimaryGeneratedColumn()
  id: number; //[cite: 7]

  @Column()
  nombre: string; //[cite: 7]

  @Column({ type: 'text', nullable: true })
  descripcion: string; //[cite: 7]

  @Column({ unique: true })
  sku: string; //[cite: 7]

  @Column({ type: 'text', nullable: true })
  imagen: string; //[cite: 7]

  @ManyToOne(() => UnidadMedida, (unidad) => unidad.materiales, { onDelete: 'RESTRICT' }) //[cite: 7]
  @JoinColumn({ name: 'unidad_medida_id' }) //[cite: 7]
  unidadMedida: UnidadMedida; //[cite: 7]

  @ManyToOne(() => Categoria, (categoria) => categoria.materiales, { onDelete: 'RESTRICT' }) //[cite: 7]
  @JoinColumn({ name: 'categoria_id' }) //[cite: 7]
  categoria: Categoria; //[cite: 7]

  // --- NUEVA LÓGICA DE PRECIOS VIRTUALES (Punto 4C) ---

  // 1. Añadimos los campos físicos para calcular el precio
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  precio_base: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  impuesto_porcentaje: number; // Ej: 15.00 para 15% de IVA

  // 2. Definimos el campo virtual (NOTA: ¡No lleva @Column! Por ende, no se crea en la base de datos)
  precio_total: number;

  // 3. El equivalente al @property para calcular automáticamente al consultar
  @AfterLoad()
  calcularPrecioTotal() {
    // Aseguramos que los tipos sean numéricos
    const base = Number(this.precio_base) || 0;
    const impuesto = Number(this.impuesto_porcentaje) || 0;
    
    // Calculamos el total y lo redondeamos a 2 decimales
    const totalCalculado = base + (base * (impuesto / 100));
    this.precio_total = Number(totalCalculado.toFixed(2));
  }
}