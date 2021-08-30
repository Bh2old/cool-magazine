import {
  LoadChildren,
  ResolveData,
  Route,
  Routes,
  RunGuardsAndResolvers,
  UrlMatcher,
} from '@angular/router';
import { AppRouteBase } from '../abstractions';
import { WILDCARD_APP_ROUTE_ID } from './wildcard-app-route-id';
import {
  WildcardAppRouteLink,
  WildcardAppRoutePathTokens,
} from './wildcard-app-route-link';

type AngularRouteComponent = Route['component'];

export class WildcardAppRoute extends AppRouteBase<WildcardAppRoutePathTokens> {
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
    super(WILDCARD_APP_ROUTE_ID, data, new WildcardAppRouteLink());

    this.component = component;
  }
}
