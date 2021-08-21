import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { ResponseTypeVariants } from '../../types';
import { SingleResponseTypeVariantSpecificationCandidatesExample } from './single-response-type-variant-specification-candidates-example';

export class ManyResponseTypeVariantsSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<Set<ResponseTypeVariants>>
{
  private readonly _singleResponseTypeVariantSpecificationCandidatesExample =
    new SingleResponseTypeVariantSpecificationCandidatesExample();

  get valid() {
    return [
      new Set<ResponseTypeVariants>(
        this._singleResponseTypeVariantSpecificationCandidatesExample.valid
      ),
    ];
  }
  get invalid() {
    return [new Set<ResponseTypeVariants>()];
  }
}
