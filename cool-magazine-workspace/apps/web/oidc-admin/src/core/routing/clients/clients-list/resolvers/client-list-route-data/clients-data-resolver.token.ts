import { inject, InjectionToken } from '@angular/core';
import {
  ClientsDataService,
  IClientsDataResolver,
  IClientsQueryHandler,
} from '@cool-magazine/generic-subdomain-oidc-admin-site';
import { CLIENTS_API_SERVICE_TOKEN } from '../../../../../api';

export const CLIENTS_QUERY_HANDLER_TOKEN =
  new InjectionToken<IClientsQueryHandler>('ClientsQueryHandler', {
    providedIn: 'root',
    factory: () => {
      return inject(CLIENTS_API_SERVICE_TOKEN);
    },
  });

export const CLIENTS_DATA_RESOLVER_TOKEN =
  new InjectionToken<IClientsDataResolver>('ClientsDataResolver', {
    providedIn: 'root',
    factory: () => {
      return new ClientsDataService(inject(CLIENTS_QUERY_HANDLER_TOKEN));
    },
  });
