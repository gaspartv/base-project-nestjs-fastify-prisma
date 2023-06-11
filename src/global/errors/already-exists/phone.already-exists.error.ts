import { CONFLICT } from 'src/utils/http-status'
import AppError from '../app-error'

export class PhoneAlreadyExistsError extends AppError {
  constructor() {
    super('Phone already exists.', CONFLICT)
  }
}
