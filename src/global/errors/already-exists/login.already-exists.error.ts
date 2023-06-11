import { CONFLICT } from 'src/utils/http-status'
import AppError from '../app-error'

export class LoginAlreadyExistsError extends AppError {
  constructor() {
    super('Login already exists.', CONFLICT)
  }
}
