import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'super_secreto_para_erp_inventario_2026', // Lee del .env
    });
  }

  async validate(payload: any) {
    // Lo que retornemos aquí, NestJS lo inyectará en el objeto `request.user`
    return { id: payload.sub, email: payload.email, rol: payload.rol, bodega_id: payload.bodega_id };
  }
}