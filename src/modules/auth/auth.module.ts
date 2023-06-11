import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import 'dotenv/config'
import { PrismaService } from 'src/database/prisma.service'
import { UsersPrismaRepository } from '../users/repositories/prisma/users.prisma.repository'
import { UsersRepository } from '../users/repositories/users.repositories'
import { UsersModule } from '../users/users.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'
import { LocalStrategy } from './strategies/local.strategy'

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    },
  ],
})
export class AuthModule {}
