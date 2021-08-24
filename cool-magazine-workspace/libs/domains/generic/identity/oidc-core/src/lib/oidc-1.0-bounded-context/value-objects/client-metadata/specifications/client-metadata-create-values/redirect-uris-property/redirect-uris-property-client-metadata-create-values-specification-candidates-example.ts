import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { ManyRedirectUriVariantsSpecificationCandidatesExample } from '../../../../redirect-uri';
import { IClientMetadataCreateValues } from '../../../models';

type PropertyType = IClientMetadataCreateValues['redirectUris'];

export class RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<PropertyType>
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
