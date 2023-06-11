import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcryptjs'
import { UnauthorizedError } from 'src/global/errors/unauthorized.error'
import { User } from '../users/entities/user.entity'
import { UsersRepository } from '../users/repositories/users.repositories'
import { ITokenDto } from './dtos/token.dto'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userRepository: UsersRepository
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email)

    if (user && (await compare(password, user.password))) {
      return { ...user, password: undefined }
    }

    throw new UnauthorizedError()
  }

  async login(user: User): Promise<ITokenDto> {
    return {
      access_token: this.jwtService.sign({
        id: user.id,
        key: user.key,
        email: user.email,
        login: user.login,
        is_active: user.is_active,
      }),
    }
  }
}
