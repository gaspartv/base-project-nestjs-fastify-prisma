import { IsString } from 'class-validator'

export class ITokenDto {
  @IsString()
  access_token: string
}
