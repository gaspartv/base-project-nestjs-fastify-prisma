import { IsBoolean, IsEmail, IsString } from 'class-validator'

export class IJwtDto {
  @IsString()
  id: string

  @IsString()
  key: string

  @IsEmail()
  email: string

  @IsString()
  login: string

  @IsBoolean()
  is_active: boolean
}
