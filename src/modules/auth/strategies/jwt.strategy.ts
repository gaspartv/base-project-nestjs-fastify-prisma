import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import 'dotenv/config'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { IJwtDto } from '../dtos/jwt.dto'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(payload: IJwtDto): Promise<IJwtDto> {
    return {
      id: payload.id,
      key: payload.key,
      email: payload.email,
      login: payload.login,
      is_active: payload.is_active,
    }
  }
}
