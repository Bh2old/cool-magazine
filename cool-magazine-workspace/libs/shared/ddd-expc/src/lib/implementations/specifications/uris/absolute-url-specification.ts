import {
  CompositeSpecification,
  IUriReferenceUriUsageParsingResult,
} from '../../../abstractions';

export class AbsoluteUrlSpecification extends CompositeSpecification<IUriReferenceUriUsageParsingResult> {
  isSatisfiedBy(candidate: IUriReferenceUriUsageParsingResult): boolean {
    const { scheme, authority, fragment } = candidate;

    if (!scheme || !authority || fragment) {
      return false;
    }

    return true;
  }
}
