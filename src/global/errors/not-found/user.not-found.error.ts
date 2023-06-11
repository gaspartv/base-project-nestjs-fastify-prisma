import { NOT_FOUND } from 'src/utils/http-status'
import AppError from '../app-error'

export class UserNotFoundError extends AppError {
  constructor() {
    super('User not found.', NOT_FOUND)
  }
}
