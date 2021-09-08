export interface IAuthStorageService {
  saveToken(token: string): void;
  getToken(): string | null;
  deleteToken(): void;
}
