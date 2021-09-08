import {
  Controller,
  Get,
  Header,
  HttpStatus,
  Redirect,
  UseGuards,
} from '@nestjs/common';
import { User } from '../shared';

import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/auth.-jwt.guard';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect(
    `http://localhost:4444/oidc/auth` +
      `?client_id=bff` +
      `&redirect_uri=http://localhost:3333/redirect/tokenCallback` +
      `&response_type=code` +
      `&scope=openid profile` +
      `&nonce=123` +
      `&state=321`,
    302
  )
  getLogin() {
    return HttpStatus.FOUND;
  }

  @Get('tokenCallback')
  @Header('Cache-Control', 'no-cache, no-store, must-revalidate')
  @Header('Clear-Site-Data', 'cache')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  //@Redirect('http://localhost:4200/tokenCallback', 302)
  getTokenCallback() {
    console.log(3);
    return this.appService.getData();
  }

  @Get('test1')
  test1(@User() user: any) {
    console.log(user, 'test1');
    return user;
  }

  @Get('test2')
  @UseGuards(JwtAuthGuard)
  test2(@User() user: any) {
    console.log(user, 'test2');
    return user;
  }
}
