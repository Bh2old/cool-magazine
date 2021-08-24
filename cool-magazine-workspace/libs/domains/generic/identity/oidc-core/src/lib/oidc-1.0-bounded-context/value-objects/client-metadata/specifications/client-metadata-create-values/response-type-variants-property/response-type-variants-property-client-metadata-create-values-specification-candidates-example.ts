import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import {
  ManyResponseTypeVariantsSpecificationCandidatesExample,
  ResponseTypeVariants,
} from '../../../../response-type';
import { IClientMetadataCreateValues } from '../../../models';

type PropertyType = IClientMetadataCreateValues['responseTypeVariants'];

export class ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<PropertyType>
{
  private readonly _manyResponseTypeVariantsSpecificationCandidatesExample =
    new ManyResponseTypeVariantsSpecificationCandidatesExample();

  get valid() {
    return [
      undefined,
      ...this._manyResponseTypeVariantsSpecificationCandidatesExample.valid,
    ];
  }
  get invalid() {
    return this._manyResponseTypeVariantsSpecificationCandidatesExample.invalid;
  }
}
