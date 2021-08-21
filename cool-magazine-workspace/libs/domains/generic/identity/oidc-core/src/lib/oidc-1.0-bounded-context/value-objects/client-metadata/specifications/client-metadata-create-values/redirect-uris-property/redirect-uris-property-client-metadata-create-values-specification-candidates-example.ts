import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { ManyRedirectUriVariantsSpecificationCandidatesExample } from '../../../../redirect-uri';

export class RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<Set<string>>
{
  private readonly _manyRedirectUriVariantsSpecificationCandidatesExample =
    new ManyRedirectUriVariantsSpecificationCandidatesExample();

  get valid() {
    return this._manyRedirectUriVariantsSpecificationCandidatesExample.valid;
  }
  get invalid() {
    return this._manyRedirectUriVariantsSpecificationCandidatesExample.invalid;
  }
}
