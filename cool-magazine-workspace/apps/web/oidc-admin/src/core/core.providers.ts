import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Provider } from '@angular/core';
import { environment } from '../environments/environment';
import { ENVIRONMENT_TOKEN } from '../environments/environment.token';
import { INTERCEPTOR_PROVIDERS } from './interceptors';
import {
  AuthStorageService,
  AUTH_STORAGE_SERVICE_TOKEN,
  BrowserLocalStorageService,
  ENVIRONMENT_LOCATION_SERVICE_TOKEN,
  IAuthStorageService,
  IEnvironmentLocationService,
} from './services';

const ENVIRONMENT_PROVIDER = {
  provide: ENVIRONMENT_TOKEN,
  useValue: environment,
} as const;

const AUTH_STORAGE_SERVICE_PROVIDER = {
  provide: AUTH_STORAGE_SERVICE_TOKEN,
  useFactory: (platformId: Record<string, unknown>, document: Document) => {
    const authStorageService: IAuthStorageService = isPlatformBrowser(
      platformId
    )
      ? new AuthStorageService(new BrowserLocalStorageService(document))
      : ({} as IAuthStorageService);

    return authStorageService;
  },
  deps: [PLATFORM_ID, DOCUMENT],
};

const ENVIRONMENT_LOCATION_SERVICE_PROVIDER = {
  provide: ENVIRONMENT_LOCATION_SERVICE_TOKEN,
  useFactory: (platformId: Record<string, unknown>, document: Document) => {
    const locationService: IEnvironmentLocationService = {
      redirect: function (url: string): void {
        document.location.href = url;
      },
    };

    return isPlatformBrowser(platformId) ? locationService : {};
  },
  deps: [PLATFORM_ID, DOCUMENT],
};


export const CORE_PROVIDERS: Provider[] = [
  ENVIRONMENT_PROVIDER,
  AUTH_STORAGE_SERVICE_PROVIDER,
  ENVIRONMENT_LOCATION_SERVICE_PROVIDER,
  INTERCEPTOR_PROVIDERS,
];
