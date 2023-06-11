import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { IAuthRequest } from '../../global/interfaces/request.dto'
import { AuthService } from './auth.service'
import { IsPublic } from './decorators/is-public.decorator'
import { ITokenDto } from './dtos/token.dto'
import { LocalAuthGuard } from './guards/local-auth.guard'

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req: IAuthRequest): Promise<ITokenDto> {
    return await this.authService.login(req.user)
  }
}
