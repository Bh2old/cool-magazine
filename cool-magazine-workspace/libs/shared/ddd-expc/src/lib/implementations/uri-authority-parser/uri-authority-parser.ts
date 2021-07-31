import {
  IAuthorityUriComponent,
  IUriAuthorityParser,
  IUriAuthorityParsingResult,
} from '../../abstractions';

export class UriAuthorityParser implements IUriAuthorityParser {
  private readonly _regExpPatternsAuthorityParts = {
    userInfo: '((?<userInfo>[^/?#]+)\\@)?',
    host: '(?<host>(\\[[^/?#]+\\])|((\\d{1,3}\\.){3}\\d{1,3})|([^/?#:]+))',
    port: '(\\:(?<port>\\d+))?',
  } as const;

  private readonly _uriAuthorityRegExpPattern =
    `^${this._regExpPatternsAuthorityParts.userInfo}` +
    `${this._regExpPatternsAuthorityParts.host}` +
    `${this._regExpPatternsAuthorityParts.port}`;

  private readonly _uriAuthorityRegExp = new RegExp(
    this._uriAuthorityRegExpPattern
  );

  parse(
    authorityUriComponent: string | IAuthorityUriComponent
  ): IUriAuthorityParsingResult | null {
    const authority =
      typeof authorityUriComponent === 'string'
        ? authorityUriComponent
        : authorityUriComponent.authority;

    if (!authority) {
      return null;
    }

    const match = authority.match(this._uriAuthorityRegExp);

    if (!match || !match.groups) {
      return null;
    }

    const result: IUriAuthorityParsingResult = {
      userInfo: match.groups.userInfo,
      host: match.groups.host,
      port: match.groups.port
        ? Number.parseInt(match.groups.port, 10)
        : undefined,
    };

    return result;
  }
}
