import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  first_name: string

  @IsString()
  @IsNotEmpty()
  last_name: string

  @IsEmail()
  @ApiProperty({
    description: 'It must be a valid email.',
    example: 'example@mail.com',
  })
  email: string

  @IsString()
  @IsNotEmpty()
  login: string

  @IsString()
  @IsNotEmpty()
  phone: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsString()
  description: string

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  key: string

  // @IsString()
  // @IsNotEmpty()
  // character: string
}
