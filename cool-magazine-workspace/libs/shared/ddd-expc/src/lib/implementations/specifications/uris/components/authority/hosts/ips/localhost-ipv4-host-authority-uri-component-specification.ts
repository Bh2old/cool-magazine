import {
  CompositeSpecification,
  IHostAuthorityUriComponentPart,
} from '@bh2old/ddd-expc/abstractions';
import { HostAuthorityUriComponentSpecification } from '../host-authority-uri-component-specification';

type LocalhostIPv4HostAuthorityUriComponent =
  | IHostAuthorityUriComponentPart
  | string;

export class LocalhostIPv4HostAuthorityUriComponentSpecification extends CompositeSpecification<LocalhostIPv4HostAuthorityUriComponent> {
  private readonly _hostAuthorityUriComponentSpecification =
    new HostAuthorityUriComponentSpecification('127.0.0.1', true);

  isSatisfiedBy(candidate: LocalhostIPv4HostAuthorityUriComponent): boolean {
    return this._hostAuthorityUriComponentSpecification.isSatisfiedBy(candidate);
  }
}
