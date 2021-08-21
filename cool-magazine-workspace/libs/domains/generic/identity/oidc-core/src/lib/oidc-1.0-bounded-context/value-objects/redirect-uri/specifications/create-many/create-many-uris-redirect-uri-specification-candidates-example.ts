import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { CreateUriRedirectUriSpecificationCandidatesExample } from '../create';

export class CreateManyUrisRedirectUriSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<Set<string>>
{
  private readonly _createUriRedirectUriSpecificationInvariantTable =
    new CreateUriRedirectUriSpecificationCandidatesExample();

  get valid() {
    return [this._createUriRedirectUriSpecificationInvariantTable.valid];
  }

  get invalid() {
    return [
      new Set<string>(),
      this._createUriRedirectUriSpecificationInvariantTable.invalid,
    ];
  }
}
