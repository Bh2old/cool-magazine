import {
  LoadChildren,
  ResolveData,
  Route,
  Routes,
  RunGuardsAndResolvers,
  UrlMatcher,
} from '@angular/router';
import { AppRouteBase } from '../../abstractions';
import { CLIENTS_LIST_APP_ROUTE_ID } from './clients-list-app-route-id';
import {
  ClientsListAppRouteLink,
  ClientsListAppRoutePathTokens,
} from './clients-list-app-route-link';
import { ClientsListRouteDataResolver } from './resolvers';

type AngularRouteComponent = Route['component'];

export class ClientsListAppRoute extends AppRouteBase<ClientsListAppRoutePathTokens> {
  component: AngularRouteComponent;
  pathMatch?: string | undefined;
  matcher?: UrlMatcher | undefined;
  redirectTo?: string | undefined;
  outlet?: string | undefined;
  canActivate?: unknown[] | undefined;
  canActivateChild?: unknown[] | undefined;
  canDeactivate?: unknown[] | undefined;
  canLoad?: unknown[] | undefined;
  resolve?: ResolveData | undefined;
  children?: Routes | undefined;
  loadChildren?: LoadChildren | undefined;
  runGuardsAndResolvers?: RunGuardsAndResolvers | undefined;

  constructor(component: AngularRouteComponent) {
    const data = {};
    super(CLIENTS_LIST_APP_ROUTE_ID, data, new ClientsListAppRouteLink());

    this.component = component;
    // this.resolve = { clients: ClientsListRouteDataResolver };
  }
}
