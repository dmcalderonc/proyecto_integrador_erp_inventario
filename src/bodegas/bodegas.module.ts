import { Module } from '@nestjs/common';
import { BodegasService } from './bodegas.service';
import { BodegasController } from './bodegas.controller';

@Module({
  controllers: [BodegasController],
  providers: [BodegasService],
})
export class BodegasModule {}
