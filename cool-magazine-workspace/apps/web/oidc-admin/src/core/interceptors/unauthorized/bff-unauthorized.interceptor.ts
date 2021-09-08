import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  ENVIRONMENT_TOKEN,
  IEnvironment,
} from '../../../environments/environment.token';
import { AuthAppRouteLink, LoginAppRouteLink } from '../../routing';
import { AUTH_SERVICE_TOKEN, IAuthService } from '../../services';

@Injectable()
export class BffUnauthorizedInterceptor implements HttpInterceptor {
  private readonly _authAppRouteLink = new AuthAppRouteLink();
  private readonly _loginAppRouteLink = new LoginAppRouteLink();
  private readonly _loginUrl = this._router.createUrlTree([
    this._authAppRouteLink.getLink(),
    this._loginAppRouteLink.getLink(),
  ]);
  private readonly _bffEndPointUrl = this._environment.bff.endPointUrl;

  constructor(
    private readonly _router: Router,
    @Inject(AUTH_SERVICE_TOKEN) private readonly _authService: IAuthService,
    @Inject(ENVIRONMENT_TOKEN) private readonly _environment: IEnvironment
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!request.url.startsWith(this._bffEndPointUrl)) {
      return next.handle(request);
    }

    return next
      .handle(request)
      .pipe(catchError((error) => this._handleError(error)));
  }

  private _handleError(httpErrorResponse: HttpErrorResponse) {
    this._authService.resetAuthorization();
    this._router.navigateByUrl(this._loginUrl);
    return throwError(httpErrorResponse);
  }
}
