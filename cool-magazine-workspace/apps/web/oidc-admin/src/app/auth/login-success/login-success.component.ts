import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AUTH_SERVICE_TOKEN,
  IAuthService,
  LoginSuccessAppRoutePathTokens,
} from '../../../core';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginSuccessComponent {
  private readonly jwtParamKey: keyof LoginSuccessAppRoutePathTokens = 'jwt';
  private readonly _jwt = this._activatedRoute.snapshot.paramMap.get(
    this.jwtParamKey
  );

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    @Inject(AUTH_SERVICE_TOKEN) private readonly _authService: IAuthService
  ) {
    this._authService.completeAuthorization(this._jwt as string);
  }
}
