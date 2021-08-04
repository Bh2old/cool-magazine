import {
  CompositeSpecification,
  IHostUriAuthorityPart,
} from '../../../../../abstractions';

type IPV6HostUriAuthorityCandidate = IHostUriAuthorityPart | string;

export class IPV6HostUriAuthoritySpecification extends CompositeSpecification<IPV6HostUriAuthorityCandidate> {
  //rfc3986
  private readonly _doubleColon = '\\:\\:';

  private get _ipv6VariablesFromRFC3986RegExpPatterns() {
    const h16 = '[0-9a-f]{1,4}';
    const IPv4address = '(?:(?:\\d{1,3}\\.){3}\\d{1,3}){1}';
    const ls32 = `(?:(?:${h16}:${h16}){1}|${IPv4address})`;
    const h16Colon = `${h16}\\:`;

    return {
      h16,
      h16Colon,
      IPv4address,
      ls32,
    } as const;
  }

  private get _ipv6CasesFromRFC3986RegExpPatterns() {
    const { h16, h16Colon, ls32 } =
      this._ipv6VariablesFromRFC3986RegExpPatterns;

    const first = `^\\[(?:${this._createRegexQuantifier(
      6,
      h16Colon
    )}${ls32}){1}\\]$`;

    const second = `^\\[(?:${this._doubleColon}${this._createRegexQuantifier(
      5,
      h16Colon
    )}${ls32}){1}\\]$`;

    const third = `^\\[(?:(?:${h16})?${
      this._doubleColon
    }${this._createRegexQuantifier(4, h16Colon)}${ls32}){1}\\]$`;

    const fourth = `^\\[(?:(?:${this._createRegexQuantifier(
      1,
      h16Colon,
      true
    )}${h16})?${this._doubleColon}${this._createRegexQuantifier(
      3,
      h16Colon
    )}${ls32}){1}\\]$`;

    const fifth = `^\\[(?:(?:${this._createRegexQuantifier(
      2,
      h16Colon,
      true
    )}${h16})?${this._doubleColon}${this._createRegexQuantifier(
      2,
      h16Colon
    )}${ls32}){1}\\]$`;

    const sixth = `^\\[(?:(?:${this._createRegexQuantifier(
      3,
      h16Colon,
      true
    )}${h16})?${this._doubleColon}${this._createRegexQuantifier(
      1,
      h16Colon
    )}${ls32}){1}\\]$`;

    const seventh = `^\\[(?:(?:${this._createRegexQuantifier(
      4,
      h16Colon,
      true
    )}${h16})?${this._doubleColon}${ls32}){1}\\]$`;

    const eighth = `^\\[(?:(?:${this._createRegexQuantifier(
      5,
      h16Colon,
      true
    )}${h16})?${this._doubleColon}${h16}){1}\\]$`;

    const ninth = `^\\[(?:(?:${this._createRegexQuantifier(
      6,
      h16Colon,
      true
    )}${h16})?${this._doubleColon}){1}\\]$`;

    return {
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
      ninth,
    } as const;
  }

  private get _ipv6HostUriAuthorityRegExpPattern() {
    const {
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
      ninth,
    } = this._ipv6CasesFromRFC3986RegExpPatterns;

    return `${first}|${second}|${third}|${fourth}|${fifth}|${sixth}|${seventh}|${eighth}|${ninth}`;
  }

  private readonly _ipv6HostUriAuthorityRegExp = new RegExp(
    this._ipv6HostUriAuthorityRegExpPattern
  );

  isSatisfiedBy(candidate: IPV6HostUriAuthorityCandidate): boolean {
    const host = typeof candidate === 'object' ? candidate.host : candidate;

    return this._ipv6HostUriAuthorityRegExp.test(host);
  }

  private _createRegexQuantifier(
    count: number,
    regexPattern: string,
    isOptional = false
  ) {
    return `(?:${regexPattern}){${isOptional ? '0,' : ''}${count}}`;
  }
}
