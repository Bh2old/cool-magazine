// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IEnvironment } from './environment.token';

export const environment: IEnvironment = {
  production: false,
  clientsApiUrl: 'http://localhost:4200/bff/clients',
  loginUrl: 'http://localhost:3333/bff/auth/login',
  bff: {
    clientsUrl: 'http://localhost:4200/bff/app/clients',
    endPointUrl: 'http://localhost:4200/bff/',
    jwtValidateUrl: (jwt: string) =>
      `http://localhost:4200/bff/auth/jwtValidate/${jwt}`,
  },
} as const;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
