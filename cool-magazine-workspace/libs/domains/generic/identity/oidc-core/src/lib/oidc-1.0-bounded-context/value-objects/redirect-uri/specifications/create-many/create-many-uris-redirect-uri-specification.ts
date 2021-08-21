import { CompositeSpecification } from '@bh2old/ddd-expc';
import { CreateUriRedirectUriSpecification } from '../create';

export class CreateManyUrisRedirectUriSpecification extends CompositeSpecification<
  Set<string>
> {
  private readonly _createUriRedirectUriSpecification =
    new CreateUriRedirectUriSpecification();

  isSatisfiedBy(candidate: Set<string>): boolean {
    if (candidate.size === 0) {
      return false;
    }

    for (const uri of candidate) {
      const isSatisfied =
        this._createUriRedirectUriSpecification.isSatisfiedBy(uri);

      if (!isSatisfied) {
        return false;
      }
    }
    return true;
  }
}
