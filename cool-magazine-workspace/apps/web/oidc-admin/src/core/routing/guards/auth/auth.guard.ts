import { Inject, Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
} from '@angular/router';
import { AUTH_SERVICE_TOKEN, IAuthService } from '../../../services';
import { AuthAppRouteLink, LoginAppRouteLink } from '../../auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  private readonly _authAppRouteLink = new AuthAppRouteLink();
  private readonly _loginAppRouteLink = new LoginAppRouteLink();
  private readonly _loginUrl = this._router.createUrlTree([
    this._authAppRouteLink.getLink(),
    this._loginAppRouteLink.getLink(),
  ]);

  private get _isAuthorization() {
    console.log(this._authService, 'this._authService.isAuthorized');
    return this._authService.isAuthorized;
  }

  constructor(
    @Inject(AUTH_SERVICE_TOKEN) private readonly _authService: IAuthService,
    private readonly _router: Router
  ) {}

  canActivate() {
    return this._can();
  }

  canActivateChild() {
    return this._can();
  }

  canLoad() {
    return this._can();
  }

  private _can() {
    return this._isAuthorization || this._loginUrl;
  }
}
