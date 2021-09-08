import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { iif, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { LoginSuccessAppRoutePathTokens } from '../..';
import { AUTH_SERVICE_TOKEN, IAuthService } from '../../../../services';

@Injectable({
  providedIn: 'root',
})
export class LoginSuccessJwtGuard implements CanActivate {
  private readonly _urlWhenInvalidJwt = this._router.createUrlTree(['/']);

  constructor(
    @Inject(AUTH_SERVICE_TOKEN) private readonly _authService: IAuthService,
    private readonly _router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const jwt = this._extractJwt(route) as string;

    return this._validateJwt$(jwt).pipe(
      mergeMap((isValid) =>
        iif(
          () => isValid,
          this._getUrlAfterCompleteAuth$(jwt),
          of(this._urlWhenInvalidJwt)
        )
      )
    );
  }

  private _extractJwt(activatedRouteSnapshot: ActivatedRouteSnapshot) {
    const jwtParamKey: keyof LoginSuccessAppRoutePathTokens = 'jwt';
    return activatedRouteSnapshot.paramMap.get(jwtParamKey);
  }

  private _validateJwt$(jwt: string) {
    return this._authService.validateToken(jwt).pipe(take(1));
  }

  private _getUrlAfterCompleteAuth$(jwt: string) {
    this._authService.completeAuthorization(jwt);
    return of(this._router.createUrlTree(['']));
  }
}
