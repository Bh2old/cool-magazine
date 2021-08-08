import {
  CompositeSpecification,
  IHostAuthorityUriComponentPart,
} from '@bh2old/ddd-expc/abstractions';

type DNSRegNameHostAuthorityUriComponentCandidate =
  | IHostAuthorityUriComponentPart
  | string;

export class DNSRegNameHostAuthorityUriComponentSpecification extends CompositeSpecification<DNSRegNameHostAuthorityUriComponentCandidate> {
  private readonly _dnsRegNameRegExpPattern =
    '^((?=[a-z0-9-]{1,63}\\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\\.)+((?=[a-z0-9-]{2,63}$)((xn--)?[a-z0-9]+))$';
  private readonly _dnsRegNameUrlRegExp = new RegExp(
    this._dnsRegNameRegExpPattern
  );

  isSatisfiedBy(
    candidate: DNSRegNameHostAuthorityUriComponentCandidate
  ): boolean {
    const dnsRegName =
      typeof candidate === 'object' ? candidate.host : candidate;

    return this._dnsRegNameUrlRegExp.test(dnsRegName);
  }
}
