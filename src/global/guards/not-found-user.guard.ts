import { UsersRepository } from '../../modules/users/repositories/users.repositories'
import { UserNotFoundError } from '../errors/not-found/user.not-found.error'

export async function userNotFoundGuard(
  id: string,
  repository: UsersRepository
) {
  if (!(await repository.findById(id))) throw new UserNotFoundError()
}
