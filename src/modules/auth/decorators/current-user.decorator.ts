import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { User } from 'src/modules/users/entities/user.entity'
import { IAuthRequest } from '../../../global/interfaces/request.dto'

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest<IAuthRequest>()

    return request.user
  }
)
