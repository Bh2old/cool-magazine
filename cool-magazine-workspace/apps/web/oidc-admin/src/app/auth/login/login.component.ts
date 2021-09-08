import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import {  Router } from '@angular/router';
import { AUTH_SERVICE_TOKEN, IAuthService } from '../../../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private get currentUrl() {
    return this._router.url;
  }
  get urlToAuth() {
    return this._authService.absoluteUrlToAuthorization;
  }

  constructor(
    private readonly _router: Router,
    @Inject(AUTH_SERVICE_TOKEN) private readonly _authService: IAuthService
  ) {}
}
