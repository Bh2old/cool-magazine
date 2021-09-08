import { IAppRouteLink } from '../../abstractions';

export type LoginAppRoutePathTokens = undefined;

export class LoginAppRouteLink
  implements IAppRouteLink<LoginAppRoutePathTokens>
{
  get path() {
    return 'login';
  }

  getLink(): string {
    return this.path;
  }
}
