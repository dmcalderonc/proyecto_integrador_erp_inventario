import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AjustesInventarioService } from './ajustes-inventario.service';
import { CreateAjusteInventarioDto } from './dto/create-ajustes-inventario.dto';

@Controller('ajustes-inventario')
export class AjustesInventarioController {
  constructor(private readonly ajustesInventarioService: AjustesInventarioService) {}

  @Post()
  async ejecutarAjuste(
    @Body() createAjusteDto: CreateAjusteInventarioDto,
    @Req() req: any
  ) {
    const usuarioId = req.user?.id || 'd3b07384-d113-4475-a8fb-08632df30291'; 

    return await this.ajustesInventarioService.ejecutarAjusteFisico(
      createAjusteDto, 
      usuarioId
    );
  }
}