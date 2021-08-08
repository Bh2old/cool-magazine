import {
  CompositeSpecification,
  IUserInfoAuthorityUriComponentPart,
} from '@bh2old/ddd-expc/abstractions';

type NoUserInfoAuthorityUriComponentCandidate =
  | IUserInfoAuthorityUriComponentPart
  | string;

export class NoUserInfoAuthorityUriComponentSpecification extends CompositeSpecification<NoUserInfoAuthorityUriComponentCandidate> {
  isSatisfiedBy(candidate: NoUserInfoAuthorityUriComponentCandidate): boolean {
    const userInfo =
      typeof candidate === 'object' ? candidate.userInfo : candidate;

    return !userInfo;
  }
}
