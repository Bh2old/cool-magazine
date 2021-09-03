import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OidcController } from './oidc/oidc.controller';

@Module({
  imports: [],
  controllers: [OidcController, AppController],
  providers: [AppService],
})
export class AppModule {}
