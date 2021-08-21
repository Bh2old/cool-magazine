import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { ResponseTypeVariants } from '../../types';
import { CreateVariantResponseTypeSpecificationCandidatesExample } from '../create';

export class CreateManyVariantsResponseTypeSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<Set<ResponseTypeVariants>>
{
  private readonly _createManyVariantResponseTypeSpecificationInvariantTable =
    new CreateVariantResponseTypeSpecificationCandidatesExample();

  get valid() {
    return [
      new Set<ResponseTypeVariants>(
        this._createManyVariantResponseTypeSpecificationInvariantTable.valid
      ),
    ];
  }
  get invalid() {
    return [new Set<ResponseTypeVariants>()];
  }
}
