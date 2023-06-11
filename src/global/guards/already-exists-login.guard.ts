import { LoginAlreadyExistsError } from 'src/global/errors/already-exists/login.already-exists.error'
import { UsersRepository } from '../../modules/users/repositories/users.repositories'

export async function loginAlreadyExistsGuard(
  login: string,
  repository: UsersRepository
) {
  if (await repository.findByLogin(login)) throw new LoginAlreadyExistsError()
}
