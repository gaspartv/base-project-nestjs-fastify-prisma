import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcryptjs'
import { plainToInstance } from 'class-transformer'
import { UserNotFoundError } from 'src/global/errors/not-found/user.not-found.error'
import { CreateUserDto } from './dto/create-user.dto'
import { ResponseUserDto } from './dto/response-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { createUserGuard } from './guards/users.create.guard'
import { UsersRepository } from './repositories/users.repositories'

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    await createUserGuard(createUserDto, this.usersRepository)

    const user = await this.usersRepository.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    })

    return plainToInstance(ResponseUserDto, user)
  }

  async profile(id: string): Promise<ResponseUserDto> {
    const user = await this.usersRepository.findById(id)

    if (!user) throw new UserNotFoundError()

    return plainToInstance(ResponseUserDto, user)
  }

  async findAll(): Promise<ResponseUserDto[]> {
    const users = await this.usersRepository.findAll()

    return plainToInstance(ResponseUserDto, users)
  }

  async findById(id: string): Promise<ResponseUserDto> {
    const user = await this.usersRepository.findById(id)

    if (!user) throw new UserNotFoundError()

    return plainToInstance(ResponseUserDto, user)
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto
  ): Promise<ResponseUserDto> {
    const findUser = await this.usersRepository.findById(id)

    if (!findUser) throw new UserNotFoundError()

    const user = await this.usersRepository.update(id, updateUserDto)

    return plainToInstance(ResponseUserDto, user)
  }

  async delete(id: string): Promise<void> {
    const user = await this.usersRepository.findById(id)

    if (!user) throw new UserNotFoundError()

    return await this.usersRepository.delete(id)
  }
}
