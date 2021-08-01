import {
  CompositeSpecification,
  IHostUriAuthorityPart,
} from '../../abstractions';

type LocalhostRegNameHostCandidate = IHostUriAuthorityPart | string;

export class HostUriAuthoritySpecification extends CompositeSpecification<LocalhostRegNameHostCandidate> {
  private readonly _host: string;
  private readonly _isCaseSensitive: boolean;

  constructor(requiredHost: string, isCaseSensitive = false) {
    super();
    this._host = requiredHost;
    this._isCaseSensitive = isCaseSensitive;
  }

  isSatisfiedBy(candidate: LocalhostRegNameHostCandidate): boolean {
    const isObjectTypeCandidate = typeof candidate === 'object';

    if (
      isObjectTypeCandidate &&
      (candidate as IHostUriAuthorityPart).host === undefined
    ) {
      return false;
    }

    const host = isObjectTypeCandidate
      ? ((candidate as IHostUriAuthorityPart).host as string)
      : (candidate as string);

    return this._isCaseSensitive
      ? host === this._host
      : this._getNotCaseSensitiveString(host) ===
          this._getNotCaseSensitiveString(this._host);
  }

  private _getNotCaseSensitiveString(value: string) {
    return value.toUpperCase();
  }
}
