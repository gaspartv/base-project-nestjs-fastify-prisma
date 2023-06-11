import { Module } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { UsersPrismaRepository } from './repositories/prisma/users.prisma.repository'
import { UsersRepository } from './repositories/users.repositories'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
