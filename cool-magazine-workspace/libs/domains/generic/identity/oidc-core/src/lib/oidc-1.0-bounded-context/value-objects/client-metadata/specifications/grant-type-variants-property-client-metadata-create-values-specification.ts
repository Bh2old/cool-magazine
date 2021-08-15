import { CompositeSpecification } from '@bh2old/ddd-expc';
import { CreateManyVariantsGrantTypeSpecification } from '../../grant-type';
import { IClientMetadataCreateValues } from '../models';

export class GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification extends CompositeSpecification<IClientMetadataCreateValues> {
  private readonly _createManyVariantsResponseTypeSpecification =
    new CreateManyVariantsGrantTypeSpecification();

  isSatisfiedBy(candidate: IClientMetadataCreateValues): boolean {
    if (candidate.grantTypeVariants === undefined) {
      return true;
    }

    return this._createManyVariantsResponseTypeSpecification.isSatisfiedBy(
      candidate.grantTypeVariants
    );
  }
}
