import {
  CompositeSpecification,
  IHostUriAuthorityPart,
} from '../../../../abstractions';
import { HostUriAuthoritySpecification } from '../host-uri-authority-specification';

type LocalhostIPv4HostCandidate = IHostUriAuthorityPart | string;

export class LocalhostIPv4HostUriAuthoritySpecification extends CompositeSpecification<LocalhostIPv4HostCandidate> {
  private readonly _hostUriAuthoritySpecification =
    new HostUriAuthoritySpecification('127.0.0.1', true);

  isSatisfiedBy(candidate: LocalhostIPv4HostCandidate): boolean {
    return this._hostUriAuthoritySpecification.isSatisfiedBy(candidate);
  }
}
