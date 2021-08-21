import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { CreateManyUrisRedirectUriSpecificationCandidatesExample } from '../../../../redirect-uri';

export class RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<Set<string>>
{
  private readonly _createManyUrisRedirectUriSpecificationCandidatesExample =
    new CreateManyUrisRedirectUriSpecificationCandidatesExample();

  get valid() {
    return this._createManyUrisRedirectUriSpecificationCandidatesExample.valid;
  }
  get invalid() {
    return this._createManyUrisRedirectUriSpecificationCandidatesExample
      .invalid;
  }
}
