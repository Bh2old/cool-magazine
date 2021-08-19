import { SpecificationInvariantTable } from '@bh2old/ddd-expc';
import { ResponseTypeVariants } from '../../types';
import { CreateVariantResponseTypeSpecificationInvariantTable } from '../create';

export class CreateManyVariantsResponseTypeSpecificationInvariantTable extends SpecificationInvariantTable<
  Set<ResponseTypeVariants>
> {
  private readonly _createManyVariantResponseTypeSpecificationInvariantTable =
    new CreateVariantResponseTypeSpecificationInvariantTable();

  get valid() {
    return {
      code: new Set<ResponseTypeVariants>(
        this._createManyVariantResponseTypeSpecificationInvariantTable.getAllValidCandidates()
      ),
    };
  }
  get invalid() {
    return {
      emptyCollection: new Set<ResponseTypeVariants>(),
    };
  }
}
