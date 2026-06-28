import { IsNotEmpty, IsNumber, IsPositive, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class DetalleDto {
  @IsNumber()
  @IsPositive()
  materialId?: number;

  @IsNumber()
  @IsPositive()
  cantidad?: number;

  @IsNumber()
  @IsPositive()
  precioUnitario?: number;
}

export class CreateOrdenCompraDto {
  @IsNotEmpty()
  proveedorId?: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DetalleDto)
  detalles?: DetalleDto[];
}