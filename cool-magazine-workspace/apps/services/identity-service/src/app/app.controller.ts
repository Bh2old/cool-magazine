import { Controller, Get, Header, Redirect } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('ident')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('token')
  @Header('Cache-Control', 'no-cache, no-store, must-revalidate')
  @Header('Clear-Site-Data', 'cache')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  @Redirect('http://localhost:3333/redirect/tokenCallback', 302)
  getToken() {
    console.log(2);
    return { url: 'http://localhost:3333/redirect/tokenCallback' };
  }
}
