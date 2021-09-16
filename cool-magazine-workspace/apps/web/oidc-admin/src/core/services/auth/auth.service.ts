import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAuthStorageService } from '../auth-storage';
import { IEnvironment } from './../../../environments/environment.token';
import { IAuthService } from './i-auth-service';

export class AuthService implements IAuthService {
  get absoluteUrlToAuthorization() {
    return this._environment.loginUrl;
  }

  get isAuthorized() {
    return !!this._storage.getToken();
  }

  get token() {
    return `Bearer ${this._storage.getToken()}`;
  }

  constructor(
    private readonly _environment: IEnvironment,
    private readonly _storage: IAuthStorageService,
    private readonly _http: HttpClient
  ) {}

  public completeAuthorization(token: string) {
    this._storage.saveToken(token);
  }

  public resetAuthorization(): void {
    this._storage.deleteToken();
  }

  public validateToken(token: string): Observable<boolean> {
    return this._http
      .get<boolean>(this._environment.bff.jwtValidateUrl(token))
      .pipe(catchError(() => [false]));
  }
}
