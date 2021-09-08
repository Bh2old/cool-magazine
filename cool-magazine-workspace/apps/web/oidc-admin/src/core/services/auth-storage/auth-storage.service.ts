import { IEnvironmentStorage } from '../abstractions';
import { IAuthStorageService } from './i-auth-storage-service';

export class AuthStorageService implements IAuthStorageService {
  private readonly _tokenStorageKey = '2barbie';
  private readonly _environmentStorage: IEnvironmentStorage<string, string>;

  constructor(environmentStorage: IEnvironmentStorage<string, string>) {
    this._environmentStorage = environmentStorage;
  }

  saveToken(token: string): void {
    this._environmentStorage.setItem(this._tokenStorageKey, token);
  }

  getToken(): string | null {
    return this._environmentStorage.getItem(this._tokenStorageKey);
  }

  deleteToken(): void {
    this._environmentStorage.removeItem(this._tokenStorageKey);
  }
}
