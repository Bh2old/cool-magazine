import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { IClientsQueryHandler } from '@cool-magazine/generic-subdomain-oidc-admin-site';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  ENVIRONMENT_TOKEN,
  IEnvironment,
} from '../../../environments/environment.token';
import { IClientsApiQuery } from './i-clients-api-query';
import { IClientsApiService } from './i-clients-api-service';

export class ClientsApiService
  implements IClientsApiService, IClientsQueryHandler
{
  private readonly _apiUrl = this._environment.bff.clientsUrl;
  private readonly _getClients$ = this._http.get<boolean>(this._apiUrl).pipe(
    catchError(() => {
      return of(false);
      //return of(new Error('poshel naxui'));
    })
  );

  constructor(
    private readonly _environment: IEnvironment,
    private readonly _http: HttpClient
  ) {}

  getClients(query: IClientsApiQuery): Observable<boolean> {
    return this._getClients$;
  }
}
