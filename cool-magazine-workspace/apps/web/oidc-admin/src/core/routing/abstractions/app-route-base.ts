import { Type } from '@angular/core';
import {
  Route,
  UrlMatcher,
  ResolveData,
  Routes,
  LoadChildren,
  RunGuardsAndResolvers,
} from '@angular/router';
import { IAppRouteLink, IRoutePathTokens } from './i-app-route-link';

type AngularRouteData = Route['data'];

export abstract class AppRouteBase<
  TRoutePathTokens extends IRoutePathTokens | undefined
> implements Route
{
  data: AngularRouteData;
  path: string;

  abstract pathMatch?: string | undefined;
  abstract matcher?: UrlMatcher | undefined;
  abstract component?: Type<unknown> | undefined;
  abstract redirectTo?: string | undefined;
  abstract outlet?: string | undefined;
  abstract canActivate?: unknown[] | undefined;
  abstract canActivateChild?: unknown[] | undefined;
  abstract canDeactivate?: unknown[] | undefined;
  abstract canLoad?: unknown[] | undefined;
  abstract resolve?: ResolveData | undefined;
  abstract children?: Routes | undefined;
  abstract loadChildren?: LoadChildren | undefined;
  abstract runGuardsAndResolvers?: RunGuardsAndResolvers | undefined;

  constructor(
    appRouteIdSymbol: symbol,
    data: AngularRouteData,
    appRouteLink: IAppRouteLink<TRoutePathTokens>
  ) {
    this.path = appRouteLink.path;
    this._setData(data, appRouteLink, appRouteIdSymbol);
  }

  private _setData(
    data: AngularRouteData,
    appRouteLink: IAppRouteLink<TRoutePathTokens>,
    appRouteIdSymbol: symbol
  ) {
    this.data = {
      ...data,
      get appRouteIdSymbol() {
        return appRouteIdSymbol;
      },
      get appRouteLink() {
        return appRouteLink;
      },
    };
  }
}
