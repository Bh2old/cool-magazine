import {
  IClientsData,
  IClientsDataResolver,
} from '@cool-magazine/generic-subdomain-oidc-admin-site';
import { Inject, Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CLIENTS_DATA_RESOLVER_TOKEN } from './clients-data-resolver.token';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientsListRouteDataResolver implements Resolve<boolean> {
  constructor(
    @Inject(CLIENTS_DATA_RESOLVER_TOKEN)
    private readonly _clientsListRouteUseCase: IClientsDataResolver
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const clientsData: IClientsData = {
      ids: new Set<string>(),
    };
    return this._clientsListRouteUseCase.getClients(clientsData).pipe(take(1));
  }
}
