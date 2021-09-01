import { IAppRouteLink } from '../../abstractions';

export type ClientsListAppRoutePathTokens = undefined;

export class ClientsListAppRouteLink
  implements IAppRouteLink<ClientsListAppRoutePathTokens>
{
  get path() {
    return '';
  }

  getLink(): string {
    return this.path;
  }
}
