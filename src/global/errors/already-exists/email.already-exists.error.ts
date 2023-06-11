import { CONFLICT } from 'src/utils/http-status'
import AppError from '../app-error'

export class EmailAlreadyExistsError extends AppError {
  constructor() {
    super('Email already exists.', CONFLICT)
  }
}
