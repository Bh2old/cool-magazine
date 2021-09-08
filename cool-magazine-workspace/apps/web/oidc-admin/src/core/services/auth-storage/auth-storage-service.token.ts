import { InjectionToken } from '@angular/core';
import { IAuthStorageService } from './i-auth-storage-service';

export const AUTH_STORAGE_SERVICE_TOKEN: InjectionToken<IAuthStorageService> =
  new InjectionToken<IAuthStorageService>('AuthStorageService');
