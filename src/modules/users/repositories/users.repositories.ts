import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { User } from '../entities/user.entity'

export abstract class UsersRepository {
  abstract create(data: CreateUserDto): Promise<User>
  abstract findAll(): Promise<User[]>
  abstract findById(id: string): Promise<User | undefined>
  abstract findByEmail(email: string): Promise<User | undefined>
  abstract findByLogin(email: string): Promise<User | undefined>
  abstract findByPhone(email: string): Promise<User | undefined>
  abstract update(id: string, data: UpdateUserDto): Promise<User>
  abstract delete(id: string): Promise<void>
}
