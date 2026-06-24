import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    // 1. Buscar usuario
    const user = await this.usersService.findByEmailForLogin(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // 2. Verificar contraseña con bcrypt
    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // 3. Verificar si está activo
    if (!user.is_active) {
      throw new UnauthorizedException('El usuario está desactivado');
    }

    // 4. Generar Payload del Token
    const payload = { sub: user.id, email: user.email, rol: user.rol, bodega_id: user.bodega_id };
    
    return {
      access_token: this.jwtService.sign(payload),
      user: { id: user.id, username: user.username, rol: user.rol }
    };
  }
}