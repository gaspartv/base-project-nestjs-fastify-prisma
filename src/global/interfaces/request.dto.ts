import { FastifyRequest } from 'fastify'
import { User } from 'src/modules/users/entities/user.entity'

export interface IAuthRequest extends FastifyRequest {
  user: User
}
