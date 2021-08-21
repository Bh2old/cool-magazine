import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import {
  ManyResponseTypeVariantsSpecificationCandidatesExample,
  ResponseTypeVariants,
} from '../../../../response-type';

export class ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<Set<ResponseTypeVariants>>
{
  private readonly _manyResponseTypeVariantsSpecificationCandidatesExample =
    new ManyResponseTypeVariantsSpecificationCandidatesExample();

  get valid() {
    return this._manyResponseTypeVariantsSpecificationCandidatesExample.valid;
  }
  get invalid() {
    return this._manyResponseTypeVariantsSpecificationCandidatesExample.invalid;
  }
}
