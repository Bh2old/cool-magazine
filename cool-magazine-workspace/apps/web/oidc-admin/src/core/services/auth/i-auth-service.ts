export interface IAuthService {
  readonly isAuthorized: boolean;
  runAuthorization(): void;
  completeAuthorization(token: string): void;
}
