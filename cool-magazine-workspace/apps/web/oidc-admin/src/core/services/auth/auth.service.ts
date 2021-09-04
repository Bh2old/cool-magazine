import { Inject } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '../../../environments/environment.token';
import {
  AUTH_STORAGE_TOKEN,
  ENVIRONMENT_LOCATION_SERVICE_TOKEN,
  IEnvironmentLocationService,
  IEnvironmentStorage,
} from '../abstractions';
import { IEnvironment } from './../../../environments/environment.token';
import { IAuthService } from './i-auth-service';

export class AuthService implements IAuthService {
  private readonly _tokenKey = '2barbie';
  private _token = this._storage.getItem(this._tokenKey);

  constructor(
    @Inject(ENVIRONMENT_LOCATION_SERVICE_TOKEN)
    private readonly _location: IEnvironmentLocationService,
    @Inject(ENVIRONMENT_TOKEN)
    private readonly _environment: IEnvironment,
    @Inject(AUTH_STORAGE_TOKEN)
    private readonly _storage: IEnvironmentStorage<string, string>
  ) {}

  get isAuthorized() {
    return !!this._token;
  }

  public runAuthorization() {
    this._location.redirect(this._environment.authApiUrl);
  }

  public completeAuthorization(token: string) {
    this._saveToken(token);
  }

  private _saveToken(token: string) {
    this._storage.setItem(this._tokenKey, token);
    this._token = token;
  }
}
