import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum UserRole {
  ADMIN = 'ADMIN',
  SOLICITANTE = 'SOLICITANTE',
  BODEGUERO = 'BODEGUERO',
  COMPRADOR = 'COMPRADOR',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password?: string; // Opcional al serializar por seguridad si usas interceptores

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.SOLICITANTE,
  })
  rol: UserRole;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Column({ type: 'int', nullable: true })
  bodega_id: number | null;

  @CreateDateColumn()
  fecha_creacion: Date;

  @UpdateDateColumn()
  fecha_modificacion: Date;
}