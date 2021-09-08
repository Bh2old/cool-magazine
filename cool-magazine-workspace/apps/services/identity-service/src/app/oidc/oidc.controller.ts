import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PKCEMethods, Provider } from 'oidc-provider';
const configuration = {
  // ... see the available options in Configuration options section

  clients: [
    {
      client_id: 'bff',
      client_secret: 'bff',
      redirect_uris: ['http://localhost:3333/bff/auth/tokenCallback'],
      // + other client properties
    },
  ],
  pkce: {
    methods: ['S256' as PKCEMethods],
    required: (ctx, client) => {
      return false;
    },
  },
};

const oidc = new Provider('http://localhost:4444', configuration);

// express/nodejs style application callback (req, res, next) for use with express apps, see /examples/express.js
oidc.callback();
const callback = oidc.callback();
@Controller('oidc')
export class OidcController {
  @All('/*')
  public mountedOidc(@Req() req: Request, @Res() res: Response): void {
    req.url = req.originalUrl.replace('/oidc', '');
    return callback(req, res);
  }
}
