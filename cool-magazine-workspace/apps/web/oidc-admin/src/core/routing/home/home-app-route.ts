import {
  LoadChildren,
  ResolveData,
  Route,
  Routes,
  RunGuardsAndResolvers,
  UrlMatcher,
} from '@angular/router';
import { AppRouteBase } from '../abstractions';
import { HOME_APP_ROUTE_ID } from './home-app-route-id';
import {
  HomeAppRouteLink,
  HomeAppRoutePathTokens,
} from './home-app-route-link';

type AngularRouteComponent = Route['component'];

export class HomeAppRoute extends AppRouteBase<HomeAppRoutePathTokens> {
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
    super(HOME_APP_ROUTE_ID, data, new HomeAppRouteLink());

    this.component = component;
    this.pathMatch = 'full';
  }
}
