import { IAppRouteLink } from '../abstractions';

export type ClientsAppRoutePathTokens = undefined;

export class ClientsAppRouteLink
  implements IAppRouteLink<ClientsAppRoutePathTokens>
{
  get path() {
    return 'clients';
  }

  getLink(): string {
    return this.path;
  }
}
