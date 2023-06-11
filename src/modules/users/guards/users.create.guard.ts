import { emailAlreadyExistsGuard } from '../../../global/guards/already-exists-email.guard'
import { loginAlreadyExistsGuard } from '../../../global/guards/already-exists-login.guard'
import { phoneAlreadyExistsGuard } from '../../../global/guards/already-exists-phone.guard'
import { CreateUserDto } from '../dto/create-user.dto'
import { UsersRepository } from '../repositories/users.repositories'

export async function createUserGuard(
  { email, login, phone }: CreateUserDto,
  repository: UsersRepository
) {
  await emailAlreadyExistsGuard(email, repository)
  await loginAlreadyExistsGuard(login, repository)
  await phoneAlreadyExistsGuard(phone, repository)
}
