import { CompositeSpecification } from '@bh2old/ddd-expc';
import { CreateUriRedirectUriSpecification } from './create-uri-redirect-uri-specification';

export class CreateManyUrisRedirectUriSpecification extends CompositeSpecification<
  Set<string>
> {
  private readonly _createUriRedirectUriSpecification =
    new CreateUriRedirectUriSpecification();

  isSatisfiedBy(candidate: Set<string>): boolean {
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
