import { HttpClient } from '@angular/common/http';
import { inject, InjectionToken } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '../../../environments/environment.token';
import { AUTH_STORAGE_SERVICE_TOKEN } from '../auth-storage';
import { AuthService } from './auth.service';
import { IAuthService } from './i-auth-service';

export const AUTH_SERVICE_TOKEN = new InjectionToken<IAuthService>(
  'AuthService',
  {
    providedIn: 'root',
    factory: () =>
      new AuthService(
        inject(ENVIRONMENT_TOKEN),
        inject(AUTH_STORAGE_SERVICE_TOKEN),
        inject(HttpClient)
      ),
  }
);
