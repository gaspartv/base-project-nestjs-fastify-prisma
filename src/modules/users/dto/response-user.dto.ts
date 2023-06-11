import { Exclude } from 'class-transformer'
import { IsEmail, IsString, IsUUID } from 'class-validator'

export class ResponseUserDto {
  @IsString()
  @IsUUID()
  id: string

  @IsString()
  @IsUUID()
  key: string

  @IsString()
  first_name: string

  @IsString()
  last_name: string

  @IsEmail()
  email: string

  @IsString()
  phone: string

  @IsString()
  login: string

  @IsString()
  avatar_url: string

  @IsString()
  description: string

  @Exclude()
  password: string
  // @IsString()
  // @IsNotEmpty()
  // character: string
}
