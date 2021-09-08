import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTH_SERVICE_TOKEN, IAuthService } from '../../services';
import {
  ENVIRONMENT_TOKEN,
  IEnvironment,
} from '../../../environments/environment.token';

@Injectable()
export class AppendJwtInterceptor implements HttpInterceptor {
  private readonly _bffEndPointUrl = this._environment.bff.endPointUrl;

  constructor(
    @Inject(AUTH_SERVICE_TOKEN) private readonly _authService: IAuthService,
    @Inject(ENVIRONMENT_TOKEN) private readonly _environment: IEnvironment
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request, 'request');
    if (!request.url.startsWith(this._bffEndPointUrl)) {
      return next.handle(request);
    }

    const setHeaders = { Authorization: this._authService.token };
    const tokenizedRequest = request.clone({ setHeaders });
    console.log(tokenizedRequest, 'tokenizedRequest');
    return next.handle(tokenizedRequest);
  }
}
