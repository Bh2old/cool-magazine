import { IEnvironment } from './environment.token';

export const environment: IEnvironment = {
  production: true,
  clientsApiUrl: 'http://localhost:4200/clients',
  loginUrl: 'http://localhost:3333/bff/auth/login',
  bff: {
    clientsUrl: 'http://localhost:4200/bff/app/',
    endPointUrl: 'http://localhost:4200/bff/auth',
    jwtValidateUrl: (jwt: string) =>
      `http://localhost:4200/bff/auth/jwtValidate/${jwt}`,
  },
};
