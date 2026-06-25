import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { MaterialesService } from './materiales.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // Tu guard de autenticación

@Controller('materiales')
export class MaterialesController {
  constructor(private readonly materialesService: MaterialesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createMaterialDto: CreateMaterialDto, @Req() req: any) {
    // Obtenemos el ID del usuario autenticado a través de la petición (inyectado por el JwtStrategy)
    const usuarioId = req.user.id; 
    return this.materialesService.create(createMaterialDto, usuarioId);
  }
}