import { Observable } from 'rxjs';
export interface IAuthService {
  readonly absoluteUrlToAuthorization: string;
  readonly isAuthorized: boolean;
  readonly token: string;
  validateToken(token: string): Observable<boolean>;
  completeAuthorization(token: string): void;
  resetAuthorization(): void;
}
