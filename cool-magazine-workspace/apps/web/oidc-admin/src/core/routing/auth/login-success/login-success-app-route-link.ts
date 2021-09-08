import { IAppRouteLink } from '../../abstractions';

export type LoginSuccessAppRoutePathTokens = { jwt: string };

export class LoginSuccessAppRouteLink
  implements IAppRouteLink<LoginSuccessAppRoutePathTokens>
{
  get path() {
    return 'login-success/:jwt';
  }

  getLink(tokens: LoginSuccessAppRoutePathTokens): string {
    return `${this.path}/${tokens.jwt}`;
  }
}
