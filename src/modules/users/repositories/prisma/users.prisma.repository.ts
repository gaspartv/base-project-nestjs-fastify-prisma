import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { CreateUserDto } from '../../dto/create-user.dto'
import { UpdateUserDto } from '../../dto/update-user.dto'
import { User } from '../../entities/user.entity'
import { UsersRepository } from '../users.repositories'

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({ data })
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany()
  }

  async findById(id: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } })
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { email } })
  }

  async findByLogin(login: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { login } })
  }

  async findByPhone(phone: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { phone } })
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({ where: { id }, data })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } })
  }
}
