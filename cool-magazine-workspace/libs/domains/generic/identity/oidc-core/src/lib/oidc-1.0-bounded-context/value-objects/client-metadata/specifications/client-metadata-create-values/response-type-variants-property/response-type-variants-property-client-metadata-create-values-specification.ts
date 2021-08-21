import { CompositeSpecification } from '@bh2old/ddd-expc';
import { CreateManyVariantsResponseTypeSpecification } from '../../../../response-type';
import { IClientMetadataCreateValues } from '../../../models';

export class ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification extends CompositeSpecification<IClientMetadataCreateValues> {
  private readonly _createManyVariantsResponseTypeSpecification =
    new CreateManyVariantsResponseTypeSpecification();

  isSatisfiedBy(candidate: IClientMetadataCreateValues): boolean {
    if (candidate.responseTypeVariants === undefined) {
      return true;
    }

    return this._createManyVariantsResponseTypeSpecification.isSatisfiedBy(
      candidate.responseTypeVariants
    );
  }
}
