import { IAppRouteLink } from '../abstractions';

export type WildcardAppRoutePathTokens = undefined;

export class WildcardAppRouteLink implements IAppRouteLink<WildcardAppRoutePathTokens> {
  get path() {
    return '**';
  }

  getLink(): string {
    return this.path;
  }
}
