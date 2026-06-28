import { Module } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { ComprasController } from './compras.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrdenCompra, DetalleOrdenCompra]),
    MovimientosModule, 
  ],
  controllers: [ComprasController],
  providers: [ComprasService],
})
export class ComprasModule {}
