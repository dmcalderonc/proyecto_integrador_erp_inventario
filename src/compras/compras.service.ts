import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdenCompra } from './entities/orden-compra.entity';
import { MovimientosService } from '../movimientos/movimientos.service'; // Ajusta la ruta

@Injectable()
export class ComprasService {
  constructor(
    @InjectRepository(OrdenCompra)
    private readonly ocRepository: Repository<OrdenCompra>,
    private readonly movimientosService: MovimientosService,
  ) {}

  async recibirOrden(id: number) {

    const orden = await this.ocRepository.findOneBy({ id });
    if (!orden) throw new Error('Orden no encontrada');

    orden.estado = 'RECIBIDA';
    await this.ocRepository.save(orden);


    await this.movimientosService.crearMovimiento({
      tipo: 'INGRESO',
      fecha: new Date(),
      observaciones: `Ingreso por OC-${orden.id} - Proveedor ID: ${orden.proveedorId}`,
      detalles: orden.detalles, 
    });

    return { mensaje: 'Orden recibida y stock actualizado' };
  }
}