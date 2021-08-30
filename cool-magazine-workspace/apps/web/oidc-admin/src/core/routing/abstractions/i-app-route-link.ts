export interface IRoutePathTokens {
  readonly [key: string]: string;
}

export interface IAppRouteLink<
  TRoutePathTokens extends IRoutePathTokens | undefined
> {
  readonly path: string;

  getLink(tokens?: TRoutePathTokens): string;
}
