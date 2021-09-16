import { HttpClient } from '@angular/common/http';
import { inject, InjectionToken } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '../../../environments/environment.token';
import { ClientsApiService } from './clients-api.service';
import { IClientsApiService } from './i-clients-api-service';

export const CLIENTS_API_SERVICE_TOKEN = new InjectionToken<IClientsApiService>(
  'ClientsApiService',
  {
    providedIn: 'root',
    factory: () => {
      return new ClientsApiService(
        inject(ENVIRONMENT_TOKEN),
        inject(HttpClient)
      );
    },
  }
);
