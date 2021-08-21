import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { GrantTypeVariants } from '../../types';
import { SingleGrantTypeVariantSpecificationCandidatesExample } from './single-response-type-variant-specification-candidates-example';

export class CreateManyVariantsGrantTypeSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<Set<GrantTypeVariants>>
{
  private readonly _singleGrantTypeVariantSpecificationCandidatesExample =
    new SingleGrantTypeVariantSpecificationCandidatesExample();

  get valid() {
    return [
      new Set<GrantTypeVariants>(
        this._singleGrantTypeVariantSpecificationCandidatesExample.valid
      ),
    ];
  }
  get invalid() {
    return [new Set<GrantTypeVariants>()];
  }
}
