import { Injectable } from '@nestjs/common';
import { CreateBodegasDto } from './dto/create-bodegas.dto';
import { UpdateBodegasDto } from './dto/update-bodegas.dto';

@Injectable()
export class BodegasService {
  create(createBodegasDto: CreateBodegasDto) {
    return 'This action adds a new bodegas';
  }

  findAll() {
    return `This action returns all bodegas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bodegas`;
  }

  update(id: number, updateBodegasDto: UpdateBodegasDto) {
    return `This action updates a #${id} bodegas`;
  }

  remove(id: number) {
    return `This action removes a #${id} bodegas`;
  }
}
