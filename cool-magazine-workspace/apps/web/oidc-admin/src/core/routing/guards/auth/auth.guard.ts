import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { AUTH_SERVICE_TOKEN, IAuthService } from '../../../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  get _isAuthorization() {
    return this._authService.isAuthorized;
  }

  constructor(
    @Inject(AUTH_SERVICE_TOKEN) private readonly _authService: IAuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this._runAuthorizationIfNo();

    return this._isAuthorization;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    this._runAuthorizationIfNo();

    return this._isAuthorization;
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    if (!this._isAuthorization) {
      this._authService.runAuthorization();
      return false;
    }

    return this._isAuthorization;
  }

  private _runAuthorizationIfNo() {
    if (!this._isAuthorization) {
      this._authService.runAuthorization();
    }
  }
}
