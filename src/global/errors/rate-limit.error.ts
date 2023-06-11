import { TOO_MANY_REQUESTS } from 'src/utils/http-status'
import AppError from './app-error'

export class RateLimitError extends AppError {
  constructor() {
    super('Too many requests.', TOO_MANY_REQUESTS)
  }
}
