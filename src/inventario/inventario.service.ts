import { Injectable } from '@nestjs/common';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';

@Injectable()
export class InventarioService {
  create(createInventarioDto: CreateInventarioDto) {
    return 'This action adds a new inventario';
  }

  findAll() {
    return `This action returns all inventario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventario`;
  }

  update(id: number, updateInventarioDto: UpdateInventarioDto) {
    return `This action updates a #${id} inventario`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventario`;
  }


async getStockByBodega(bodegaId: number): Promise<StockBodega[]> {
  return await this.stockRepository.find({
    where: { bodega_id: bodegaId },
    relations: ['material']
  });
}


async getGlobalStockByMaterial(materialId: number): Promise<number> {
  const stocks = await this.stockRepository.find({
    where: { material_id: materialId }
  });
  

  return stocks.reduce((acc, curr) => acc + curr.cantidad_disponible + curr.cantidad_reservada, 0);
}
}
