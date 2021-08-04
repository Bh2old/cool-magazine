import {
  CompositeSpecification,
  IHostUriAuthorityPart,
} from '../../../../abstractions';

type RegNameUrlCandidate = IHostUriAuthorityPart | string;

export class RegNameUrlSpecification extends CompositeSpecification<RegNameUrlCandidate> {
  private readonly _regNameUrlRegExpPattern =
    '^((?=[a-z0-9-]{1,63}\\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\\.)+((?=[a-z0-9-]{2,63}$)((xn--)?[a-z0-9]+))$';
  private readonly _regNameUrlRegExp = new RegExp(
    this._regNameUrlRegExpPattern
  );

  isSatisfiedBy(candidate: RegNameUrlCandidate): boolean {
    const regName = typeof candidate === 'object' ? candidate.host : candidate;

    return this._regNameUrlRegExp.test(regName);
  }
}
