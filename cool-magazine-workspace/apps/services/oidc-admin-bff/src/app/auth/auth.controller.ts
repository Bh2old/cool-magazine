import { AuthOidcGuard } from './auth-oidc.guard';
import { Controller, Get, Param, Redirect, UseGuards } from '@nestjs/common';
import { User } from '../../shared';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly _jwtService: JwtService) {}

  @Get('login')
  @UseGuards(AuthOidcGuard)
  login() {
    return;
  }

  @Get('tokenCallback')
  @UseGuards(AuthOidcGuard)
  @Redirect()
  async tokenCallback(@User() user: any) {
    const payload = { ...user };
    console.log(user, 'tokenCallback');

    return {
      url: `http://localhost:4200/auth/login-success/${this._jwtService.sign(
        payload
      )}`,
    };
  }

  @Get('jwtValidate/:jwt')
  jwtValidate(@Param() params) {
    return this._jwtService.verifyAsync(params.jwt).then(
      (s) => {
        console.log(s, 's');
        return true;
      },
      (e) => {
        console.log(e, 'e');
        return false;
      }
    );
  }
}
