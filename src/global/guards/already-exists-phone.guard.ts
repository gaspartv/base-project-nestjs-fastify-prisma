import { PhoneAlreadyExistsError } from 'src/global/errors/already-exists/phone.already-exists.error'
import { UsersRepository } from '../../modules/users/repositories/users.repositories'

export async function phoneAlreadyExistsGuard(
  phone: string,
  repository: UsersRepository
) {
  if (await repository.findByPhone(phone)) throw new PhoneAlreadyExistsError()
}
