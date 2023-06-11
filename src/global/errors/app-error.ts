import { BAD_REQUEST } from 'src/utils/http-status'

export default class AppError {
  constructor(
    public readonly message: string,
    public readonly statusCode: number = BAD_REQUEST
  ) {}
}
