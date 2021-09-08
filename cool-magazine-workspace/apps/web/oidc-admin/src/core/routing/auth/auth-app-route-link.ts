import { IAppRouteLink } from '../abstractions';

export type AuthAppRoutePathTokens = undefined;

export class AuthAppRouteLink implements IAppRouteLink<AuthAppRoutePathTokens> {
  get path() {
    return 'auth';
  }

  getLink(): string {
    return this.path;
  }
}
