import {
  CompositeSpecification,
  IHostUriAuthorityPart,
} from '../../../../../abstractions';

type IPV4HostUriAuthorityCandidate = IHostUriAuthorityPart | string;

export class IPV4HostUriAuthoritySpecification extends CompositeSpecification<IPV4HostUriAuthorityCandidate> {
  private readonly _ipv4RegExpPattern = '^(?<ipv4>(\\d{1,3}\\.){3}\\d{1,3})$';
  private readonly _ipv4RegExp = new RegExp(this._ipv4RegExpPattern);

  isSatisfiedBy(candidate: IPV4HostUriAuthorityCandidate): boolean {
    const host = typeof candidate === 'object' ? candidate.host : candidate;

    return this._ipv4RegExp.test(host);
  }
}
