import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CurrentUser } from '../auth/decorators/current-user.decorator'
import { IsPublic } from '../auth/decorators/is-public.decorator'
import { CreateUserDto } from './dto/create-user.dto'
import { ResponseUserDto } from './dto/response-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'
import { UsersService } from './users.service'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @IsPublic()
  @Post()
  async create(@Body() data: CreateUserDto): Promise<ResponseUserDto> {
    return await this.usersService.create(data)
  }

  @Get('profile')
  async profile(@CurrentUser() user: User): Promise<ResponseUserDto> {
    return await this.usersService.profile(user.id)
  }

  @Get()
  async findAll(): Promise<ResponseUserDto[]> {
    return await this.usersService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseUserDto> {
    return await this.usersService.findById(id)
  }

  @Patch()
  async update(@CurrentUser() user: User, @Body() data: UpdateUserDto): Promise<ResponseUserDto> {
    return await this.usersService.update(user.id, data)
  }

  @Delete()
  async delete(@CurrentUser() user: User): Promise<void> {
    return await this.usersService.delete(user.id)
  }
}
