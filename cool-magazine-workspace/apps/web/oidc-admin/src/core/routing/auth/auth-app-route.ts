import {
  LoadChildren,
  ResolveData,
  Route,
  Routes,
  RunGuardsAndResolvers,
  UrlMatcher,
} from '@angular/router';
import { LayoutComponent } from '../../components';
import { AppRouteBase } from '../abstractions';
import { AUTH_APP_ROUTE_ID } from './auth-app-route-id';
import {
  AuthAppRouteLink,
  AuthAppRoutePathTokens,
} from './auth-app-route-link';

type AngularRouteComponent = Route['component'];

export class AuthAppRoute extends AppRouteBase<AuthAppRoutePathTokens> {
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

  constructor(loadChildren: LoadChildren) {
    const data = {};
    super(AUTH_APP_ROUTE_ID, data, new AuthAppRouteLink());
    this.component = LayoutComponent;
    this.loadChildren = loadChildren;
    //this.canLoad = [AuthGuard];
  }
}
