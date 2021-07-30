import {
  CompositeSpecification,
  IUriReferenceParsingResult,
} from '../../abstractions';

export class AbsoluteUrlSpecification extends CompositeSpecification<IUriReferenceParsingResult> {
  isSatisfiedBy(candidate: IUriReferenceParsingResult): boolean {
    const { scheme, authority, fragment } = candidate;

    if (!scheme || !authority || fragment) {
      return false;
    }

    return true;
  }
}
