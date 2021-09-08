import {
  LoadChildren,
  ResolveData,
  Route,
  Routes,
  RunGuardsAndResolvers,
  UrlMatcher,
} from '@angular/router';
import { AppRouteBase } from '../abstractions';
import { AuthGuard } from '../guards';
import { CLIENTS_APP_ROUTE_ID } from './clients-app-route-id';
import {
  ClientsAppRouteLink,
  ClientsAppRoutePathTokens,
} from './clients-app-route-link';

type AngularRouteComponent = Route['component'];

export class ClientsAppRoute extends AppRouteBase<ClientsAppRoutePathTokens> {
  component?: AngularRouteComponent;
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

  constructor(loadChildren: LoadChildren) {
    const data = {};
    super(CLIENTS_APP_ROUTE_ID, data, new ClientsAppRouteLink());

    this.loadChildren = loadChildren;
    this.canLoad = [AuthGuard];
    this.canActivateChild = [AuthGuard];
  }
}
