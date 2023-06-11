import { NOT_FOUND } from 'src/utils/http-status'
import AppError from '../app-error'

export class TokenNotFoundError extends AppError {
  constructor() {
    super('Token not found.', NOT_FOUND)
  }
}
