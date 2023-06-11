import { UNAUTHORIZED } from 'src/utils/http-status'
import AppError from './app-error'

export class UnauthorizedError extends AppError {
  constructor() {
    super('Unauthorized.', UNAUTHORIZED)
  }
}
