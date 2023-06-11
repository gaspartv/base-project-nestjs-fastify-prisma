import { IsEmail, IsString } from 'class-validator'

export class ILoginDto {
  @IsEmail()
  email: string

  @IsString()
  password: string
}
