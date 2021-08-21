import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import {
  CreateManyVariantsResponseTypeSpecificationCandidatesExample,
  ResponseTypeVariants,
} from '../../../../response-type';

export class ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<Set<ResponseTypeVariants>>
{
  private readonly _createManyVariantsResponseTypeSpecificationCandidatesExample =
    new CreateManyVariantsResponseTypeSpecificationCandidatesExample();

  get valid() {
    return this._createManyVariantsResponseTypeSpecificationCandidatesExample
      .valid;
  }
  get invalid() {
    return this._createManyVariantsResponseTypeSpecificationCandidatesExample
      .invalid;
  }
}
