import { CompositeSpecification } from '@bh2old/ddd-expc';
import { ManyResponseTypeVariantsSpecification } from '../../../../response-type';
import { IClientMetadataCreateValues } from '../../../models';

export class ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification extends CompositeSpecification<IClientMetadataCreateValues> {
  private readonly _manyResponseTypeVariantsSpecification =
    new ManyResponseTypeVariantsSpecification();

  isSatisfiedBy(candidate: IClientMetadataCreateValues): boolean {
    if (candidate.responseTypeVariants === undefined) {
      return true;
    }

    return this._manyResponseTypeVariantsSpecification.isSatisfiedBy(
      candidate.responseTypeVariants
    );
  }
}
