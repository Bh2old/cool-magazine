import {
  CompositeSpecification,
  IHostAuthorityUriComponentPart,
} from '@bh2old/ddd-expc/abstractions';

type LocalhostRegNameHostCandidate = IHostAuthorityUriComponentPart | string;

export class HostUriAuthoritySpecification extends CompositeSpecification<LocalhostRegNameHostCandidate> {
  private readonly _host: string;
  private readonly _isCaseSensitive: boolean;

  constructor(requiredHost: string, isCaseSensitive = false) {
    super();
    this._host = requiredHost;
    this._isCaseSensitive = isCaseSensitive;
  }

  isSatisfiedBy(candidate: LocalhostRegNameHostCandidate): boolean {
    const host = typeof candidate === 'object' ? candidate.host : candidate;

    return this._isCaseSensitive
      ? host === this._host
      : this._getNotCaseSensitiveString(host) ===
          this._getNotCaseSensitiveString(this._host);
  }

  private _getNotCaseSensitiveString(value: string) {
    return value.toUpperCase();
  }
}
