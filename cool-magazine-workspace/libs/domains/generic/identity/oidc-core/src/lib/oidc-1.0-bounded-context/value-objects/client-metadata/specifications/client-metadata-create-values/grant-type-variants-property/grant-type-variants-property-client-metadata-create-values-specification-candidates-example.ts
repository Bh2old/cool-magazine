import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { CreateManyVariantsGrantTypeSpecificationCandidatesExample } from '../../../../grant-type';
import { IClientMetadataCreateValues } from '../../../models';

type PropertyType = IClientMetadataCreateValues['grantTypeVariants'];

export class GrantTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<PropertyType>
{
  private readonly _createManyVariantsGrantTypeSpecificationCandidatesExample =
    new CreateManyVariantsGrantTypeSpecificationCandidatesExample();

  get valid() {
    return [
      undefined,
      ...this._createManyVariantsGrantTypeSpecificationCandidatesExample.valid,
    ];
  }
  get invalid() {
    return this._createManyVariantsGrantTypeSpecificationCandidatesExample
      .invalid;
  }
}
