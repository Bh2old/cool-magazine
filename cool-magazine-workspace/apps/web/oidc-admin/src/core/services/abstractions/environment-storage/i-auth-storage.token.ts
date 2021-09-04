import { InjectionToken } from '@angular/core';
import { IEnvironmentStorage } from './i-environment-storage';

export const AUTH_STORAGE_TOKEN: InjectionToken<
  IEnvironmentStorage<string, string>
> = new InjectionToken<IEnvironmentStorage<string, string>>('AuthStorage');
