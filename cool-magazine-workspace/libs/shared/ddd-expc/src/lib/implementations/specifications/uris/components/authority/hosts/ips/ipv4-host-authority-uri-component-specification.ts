import {
  CompositeSpecification,
  IHostAuthorityUriComponentPart,
} from '@bh2old/ddd-expc/abstractions';

type IPv4HostAuthorityUriComponentCandidate =
  | IHostAuthorityUriComponentPart
  | string;

export class IPv4HostAuthorityUriComponentSpecification extends CompositeSpecification<IPv4HostAuthorityUriComponentCandidate> {
  private readonly _ipv4RegExpPattern = '^(?<ipv4>(\\d{1,3}\\.){3}\\d{1,3})$';
  private readonly _ipv4RegExp = new RegExp(this._ipv4RegExpPattern);

  isSatisfiedBy(candidate: IPv4HostAuthorityUriComponentCandidate): boolean {
    const host = typeof candidate === 'object' ? candidate.host : candidate;

    return this._ipv4RegExp.test(host);
  }
}
