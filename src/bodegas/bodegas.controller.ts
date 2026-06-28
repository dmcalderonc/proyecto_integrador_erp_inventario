import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BodegasService } from './bodegas.service';
import { CreateBodegasDto } from './dto/create-bodegas.dto';
import { UpdateBodegasDto } from './dto/update-bodegas.dto';

@Controller()
export class BodegasController {
  constructor(private readonly bodegasService: BodegasService) {}

  @MessagePattern('createBodegas')
  create(@Payload() createBodegasDto: CreateBodegasDto) {
    return this.bodegasService.create(createBodegasDto);
  }

  @MessagePattern('findAllBodegas')
  findAll() {
    return this.bodegasService.findAll();
  }

  @MessagePattern('findOneBodegas')
  findOne(@Payload() id: number) {
    return this.bodegasService.findOne(id);
  }

  @MessagePattern('updateBodegas')
  update(@Payload() updateBodegasDto: UpdateBodegasDto) {
    return this.bodegasService.update(updateBodegasDto.id, updateBodegasDto);
  }

  @MessagePattern('removeBodegas')
  remove(@Payload() id: number) {
    return this.bodegasService.remove(id);
  }
}
