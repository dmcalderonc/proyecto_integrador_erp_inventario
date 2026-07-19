import { Module } from '@nestjs/common';
import { SolicitudesCompraService } from './solicitudes-compra.service';
import { SolicitudesCompraController } from './solicitudes-compra.controller';

@Module({
  controllers: [SolicitudesCompraController],
  providers: [SolicitudesCompraService],
})
export class SolicitudesCompraModule {}
