import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventario } from './entities/inventario.entity';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';

@Injectable()
export class InventarioService {
  constructor(
    @InjectRepository(Inventario)
    private readonly inventarioRepository: Repository<Inventario>,
  ) {}


  create(createInventarioDto: CreateInventarioDto) {
    return this.inventarioRepository.save(createInventarioDto);
  }

  findAll() {
    return this.inventarioRepository.find();
  }

  findOne(id: number) {
    return this.inventarioRepository.findOne({ where: { id } });
  }

  update(id: number, updateInventarioDto: UpdateInventarioDto) {
    return this.inventarioRepository.update(id, updateInventarioDto);
  }

  remove(id: number) {
    return this.inventarioRepository.delete(id);
  }

  async getStockByBodega(bodegaId: number): Promise<Inventario[]> {
    return await this.inventarioRepository.find({ where: { bodega_id: bodegaId } });
  }

  async getGlobalStockByMaterial(materialId: number): Promise<number> {
    const stocks = await this.inventarioRepository.find({ where: { material_id: materialId } });
    return stocks.reduce((acc, curr) => acc + (curr.cantidad_disponible || 0) + (curr.cantidad_reservada || 0), 0);
  }
}