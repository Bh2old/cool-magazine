import {
  LoadChildren,
  ResolveData,
  Route,
  Routes,
  RunGuardsAndResolvers,
  UrlMatcher,
} from '@angular/router';
import { AppRouteBase } from '../../abstractions';
import { LOGIN_APP_ROUTE_ID } from './login-app-route-id';
import {
  LoginAppRouteLink,
  LoginAppRoutePathTokens,
} from './login-app-route-link';

type AngularRouteComponent = Route['component'];

export class LoginAppRoute extends AppRouteBase<LoginAppRoutePathTokens> {
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
    super(LOGIN_APP_ROUTE_ID, data, new LoginAppRouteLink());

    this.component = component;
  }
}
