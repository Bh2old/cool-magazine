import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { GrantTypeVariants } from '../../types';
import { CreateVariantGrantTypeSpecificationCandidatesExample } from '../create';

export class CreateManyVariantsGrantTypeSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<Set<GrantTypeVariants>>
{
  private readonly _createManyVariantGrantTypeSpecificationInvariantTable =
    new CreateVariantGrantTypeSpecificationCandidatesExample();

  get valid() {
    return [
      new Set<GrantTypeVariants>(
        this._createManyVariantGrantTypeSpecificationInvariantTable.valid
      ),
    ];
  }
  get invalid() {
    return [new Set<GrantTypeVariants>()];
  }
}
