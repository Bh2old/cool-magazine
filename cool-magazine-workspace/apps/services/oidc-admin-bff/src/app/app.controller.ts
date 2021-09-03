import { Controller, Get, Header, Redirect, Res } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('redirect')
export class AppController {
  constructor(private readonly appService: AppService) {}
  auth =
    `http://localhost:4444/oidc/auth` +
    `?client_id=bff` +
    `&redirect_uri=http://localhost:3333/redirect/tokenCallback` +
    `&response_type=code` +
    `&scope=openid profile` +
    `&nonce=123` +
    `&state=321`;

  @Get('identity')
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
  getIdentity(@Res() res) {
    return 'xyu';
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

  @Get('*')
  @Header('Cache-Control', 'no-cache, no-store, must-revalidate')
  @Header('Clear-Site-Data', 'cache')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  getPoshelNahui() {
    console.log(4);
    return 'getPoshelNahui';
  }
}
