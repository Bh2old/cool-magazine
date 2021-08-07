import {
  CompositeSpecification,
  IHostAuthorityUriComponentPart,
} from '@bh2old/ddd-expc/abstractions';
import { HostUriAuthoritySpecification } from '../host-uri-authority-specification';

type LocalhostRegNameHostCandidate = IHostAuthorityUriComponentPart | string;

export class LocalhostRegNameHostUriAuthoritySpecification extends CompositeSpecification<LocalhostRegNameHostCandidate> {
  private readonly _isCaseSensitive: boolean;
  private readonly _hostUriAuthoritySpecification: HostUriAuthoritySpecification;

  constructor(isCaseSensitive = false) {
    super();
    this._isCaseSensitive = isCaseSensitive;
    this._hostUriAuthoritySpecification = new HostUriAuthoritySpecification(
      'localhost',
      this._isCaseSensitive
    );
  }
  isSatisfiedBy(candidate: LocalhostRegNameHostCandidate): boolean {
    return this._hostUriAuthoritySpecification.isSatisfiedBy(candidate);
  }
}
