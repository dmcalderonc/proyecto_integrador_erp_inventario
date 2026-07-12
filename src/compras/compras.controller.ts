import { Controller, Get, Post, Body, Patch, Param, Delete, Res, ParseIntPipe, NotFoundException } from '@nestjs/common';
import type { Response } from 'express'; 
import { ComprasService } from './compras.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { PdfService } from '../pdf/pdf.service';

@Controller('compras')
export class ComprasController {
  constructor(
    private readonly comprasService: ComprasService,
    private readonly pdfService: PdfService
  ) {}

  @Post()
  create(@Body() createCompraDto: CreateCompraDto) {
    return this.comprasService.create(createCompraDto);
  }

  @Get()
  findAll() {
    return this.comprasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comprasService.findOne(+id);
  }

  @Get(':id/pdf')
  async descargarOrdenCompraPdf(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response
  ) {
    const orden = await this.comprasService.findOne(id);
    
    if (!orden) {
      throw new NotFoundException('Orden de compra no encontrada');
    }
    
    const pdfBuffer = await this.pdfService.generarOrdenCompraPdf(orden);
    const codigoProyecto = orden['proyecto']?.codigoProyecto || 'PROY-GENERIC';
    const filename = `${codigoProyecto}_mp.pdf`;

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Length': pdfBuffer.length,
    });

    res.end(pdfBuffer);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompraDto: UpdateCompraDto) {
    return this.comprasService.update(+id, updateCompraDto);
  }

  @Patch(':id/recibir')
  async recibir(@Param('id') id: string) {
    return await this.comprasService.recibirOrden(+id, '550e8400-e29b-41d4-a716-446655440000'); 
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comprasService.remove(+id);
  }
}