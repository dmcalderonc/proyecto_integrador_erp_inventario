import { PartialType } from '@nestjs/mapped-types';
import { CreateBodegasDto } from './create-bodegas.dto';

export class UpdateBodegasDto extends PartialType(CreateBodegasDto) {
  id: number;
}
