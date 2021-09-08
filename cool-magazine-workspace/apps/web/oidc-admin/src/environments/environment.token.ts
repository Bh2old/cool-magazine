import { InjectionToken } from '@angular/core';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export interface IEnvironment {
  readonly production: boolean;
  readonly clientsApiUrl: string;
  readonly loginUrl: string;
  readonly bff: {
    endPointUrl: string;
    jwtValidateUrl: (jwt: string) => string;
  };
}

export const ENVIRONMENT_TOKEN = new InjectionToken<IEnvironment>(
  'Environment'
);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
