import {
  CompositeSpecification,
  IUriReferenceUriUsageParsingResult,
} from '@bh2old/ddd-expc/abstractions';

export class AbsoluteUrlSpecification extends CompositeSpecification<IUriReferenceUriUsageParsingResult> {
  isSatisfiedBy(candidate: IUriReferenceUriUsageParsingResult): boolean {
    const { scheme, authority, fragment } = candidate;

    if (!scheme || !authority || fragment) {
      return false;
    }

    return true;
  }
}
