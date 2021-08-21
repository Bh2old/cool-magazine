import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { ResponseType } from '../../response-type.value-object';
import { ResponseTypeVariants } from '../../types';

export class CreateVariantResponseTypeSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<ResponseTypeVariants>
{
  get valid() {
    return Object.keys(
      ResponseType.RESPONSE_TYPES_VARIANTS
    ) as Iterable<ResponseTypeVariants>;
  }
  get invalid() {
    return [];
  }
}
