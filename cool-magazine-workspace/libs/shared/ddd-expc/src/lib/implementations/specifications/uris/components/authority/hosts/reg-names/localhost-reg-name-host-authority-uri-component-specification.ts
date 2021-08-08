import {
  CompositeSpecification,
  IHostAuthorityUriComponentPart,
} from '@bh2old/ddd-expc/abstractions';
import { HostAuthorityUriComponentSpecification } from '../host-authority-uri-component-specification';

type LocalhostRegNameHostAuthorityUriComponentCandidate =
  | IHostAuthorityUriComponentPart
  | string;

export class LocalhostRegNameHostAuthorityUriComponentSpecification extends CompositeSpecification<LocalhostRegNameHostAuthorityUriComponentCandidate> {
  private readonly _isCaseSensitive: boolean;
  private readonly _hostAuthorityUriComponentSpecification: HostAuthorityUriComponentSpecification;

  constructor(isCaseSensitive = false) {
    super();
    this._isCaseSensitive = isCaseSensitive;
    this._hostAuthorityUriComponentSpecification =
      new HostAuthorityUriComponentSpecification(
        'localhost',
        this._isCaseSensitive
      );
  }
  isSatisfiedBy(
    candidate: LocalhostRegNameHostAuthorityUriComponentCandidate
  ): boolean {
    return this._hostAuthorityUriComponentSpecification.isSatisfiedBy(
      candidate
    );
  }
}
