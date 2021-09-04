import { InjectionToken } from '@angular/core';
import { IBrowserLocalStorageService } from './i-browser-local-storage-service';

export const BROWSER_LOCAL_STORAGE_SERVICE: InjectionToken<IBrowserLocalStorageService> =
  new InjectionToken<IBrowserLocalStorageService>('BrowserLocalStorageService');
