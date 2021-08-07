import {
  IUriReferenceUriUsageParser,
  IUriReferenceUriUsageParsingResult,
} from '@bh2old/ddd-expc/abstractions';

export class UriReferenceUriUsageParser implements IUriReferenceUriUsageParser {
  private readonly _regExpPatternsUriComponents = {
    scheme: '(?<scheme>[^:/?#]+)',
    authority: '(?<authority>[^/?#]*)',
    path: '(?<path>[^?#]*)',
    query: '(?<query>[^#]*)',
    fragment: '(?<fragment>.*)',
  } as const;

  private readonly _uriReferenceRegExpPatternFromRFC3986 =
    `^(${this._regExpPatternsUriComponents.scheme}:)?` +
    `(//${this._regExpPatternsUriComponents.authority})?` +
    `${this._regExpPatternsUriComponents.path}` +
    `(\\?${this._regExpPatternsUriComponents.query})?` +
    `(#${this._regExpPatternsUriComponents.fragment})?`;

  private readonly _uriReferenceRegExpFromRFC3986 = new RegExp(
    this._uriReferenceRegExpPatternFromRFC3986
  );

  parse(uri: string) {
    const match = uri.match(this._uriReferenceRegExpFromRFC3986);

    if (!match || !match.groups) {
      return null;
    }

    const result: IUriReferenceUriUsageParsingResult = {
      scheme: match.groups.scheme,
      authority: match.groups.authority,
      path: match.groups.path,
      query: match.groups.query,
      fragment: match.groups.fragment,
    };

    return result;
  }
}
