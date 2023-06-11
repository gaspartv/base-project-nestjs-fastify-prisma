import { EmailAlreadyExistsError } from 'src/global/errors/already-exists/email.already-exists.error'
import { UsersRepository } from '../../modules/users/repositories/users.repositories'

export async function emailAlreadyExistsGuard(
  email: string,
  repository: UsersRepository
) {
  if (await repository.findByEmail(email)) throw new EmailAlreadyExistsError()
}
