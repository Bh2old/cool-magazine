import { Issuer, Strategy } from 'openid-client';
import { Module } from '@nestjs/common';
import { CLIENT, PASSPORT } from './auth.constants';
import { AuthController } from './auth.controller';
import * as passport from 'passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth-jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'jwtConstants.secret',
      signOptions: { expiresIn: '180s' },
    }),
  ],
  providers: [
    {
      provide: CLIENT,
      useFactory: async () => {
        const issuer = await Issuer.discover('http://localhost:4444/oidc');

        return new issuer.Client({
          client_id: 'bff',
          client_secret: 'bff',
          redirect_uris: ['http://localhost:3333/bff/auth/tokenCallback'],
          response_types: ['code'],
          // id_token_signed_response_alg (default "RS256")
          // token_endpoint_auth_method (default "client_secret_basic")
        }); // => Client
      },
    },
    {
      provide: PASSPORT,
      useFactory: (client) => {
        passport.use(
          'oidc',
          new Strategy({ client }, (tokenSet, userinfo, done) => {
            return done(null, userinfo);
          })
        );
        return passport;
      },
      inject: [CLIENT],
    },
    JwtStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
