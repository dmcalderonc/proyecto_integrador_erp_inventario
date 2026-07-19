import { Controller, Get, Post, Body, Patch, Param, Query, UseGuards, Req } from '@nestjs/common';
import { SolicitudesCompraService } from './solicitudes-compra.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { EstadoSolicitud } from './entities/solicitud-compra.entity';

@Controller('solicitudes-compra')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SolicitudesCompraController {
  constructor(private readonly solicitudesService: SolicitudesCompraService) { }

  @Get()
  findAll(
    @Query('estado') estado?: EstadoSolicitud,
    @Query('proyectoId') proyectoId?: string,
  ) {
    return this.solicitudesService.findAll(estado, proyectoId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: any, @Req() req: any) {
    const usuarioActualId = req.user.id;
    const rolUsuario = req.user.rol;
    return this.solicitudesService.update(+id, updateDto, usuarioActualId, rolUsuario);
  }
}