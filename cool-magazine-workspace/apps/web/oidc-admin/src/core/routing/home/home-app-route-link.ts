import { IAppRouteLink } from '../abstractions';

export type HomeAppRoutePathTokens = undefined;

export class HomeAppRouteLink implements IAppRouteLink<HomeAppRoutePathTokens> {
  get path() {
    return '';
  }

  getLink(): string {
    return this.path;
  }
}
