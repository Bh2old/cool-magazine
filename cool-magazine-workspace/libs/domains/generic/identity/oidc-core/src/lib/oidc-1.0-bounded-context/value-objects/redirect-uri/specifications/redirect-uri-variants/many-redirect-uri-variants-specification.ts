import { CompositeSpecification } from '@bh2old/ddd-expc';
import { SingleRedirectUriVariantSpecification } from './single-redirect-uri-variant-specification';

export class ManyRedirectUriVariantsSpecification extends CompositeSpecification<
  Set<string>
> {
  private readonly _singleRedirectUriVariantSpecification =
    new SingleRedirectUriVariantSpecification();

  isSatisfiedBy(candidate: Set<string>): boolean {
    if (candidate.size === 0) {
      return false;
    }

    for (const uri of candidate) {
      const isSatisfied =
        this._singleRedirectUriVariantSpecification.isSatisfiedBy(uri);

      if (!isSatisfied) {
        return false;
      }
    }
    return true;
  }
}
