import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import {
  CreateManyVariantsGrantTypeSpecificationCandidatesExample,
  GrantTypeVariants,
} from '../../../../grant-type';

export class GrantTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<Set<GrantTypeVariants>>
{
  private readonly _createManyVariantsGrantTypeSpecificationCandidatesExample =
    new CreateManyVariantsGrantTypeSpecificationCandidatesExample();

  get valid() {
    return this._createManyVariantsGrantTypeSpecificationCandidatesExample
      .valid;
  }
  get invalid() {
    return this._createManyVariantsGrantTypeSpecificationCandidatesExample
      .invalid;
  }
}
