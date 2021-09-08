import {
  LoadChildren,
  ResolveData,
  Route,
  Routes,
  RunGuardsAndResolvers,
  UrlMatcher,
} from '@angular/router';
import { AppRouteBase } from '../../abstractions';
import { LoginSuccessJwtGuard } from './guards';
import { LOGIN_SUCCESS_APP_ROUTE_ID } from './login-success-app-route-id';
import {
  LoginSuccessAppRouteLink,
  LoginSuccessAppRoutePathTokens,
} from './login-success-app-route-link';

type AngularRouteComponent = Route['component'];

export class LoginSuccessAppRoute extends AppRouteBase<LoginSuccessAppRoutePathTokens> {
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
    super(LOGIN_SUCCESS_APP_ROUTE_ID, data, new LoginSuccessAppRouteLink());

    this.component = component;
    this.canActivate = [LoginSuccessJwtGuard];
  }
}
