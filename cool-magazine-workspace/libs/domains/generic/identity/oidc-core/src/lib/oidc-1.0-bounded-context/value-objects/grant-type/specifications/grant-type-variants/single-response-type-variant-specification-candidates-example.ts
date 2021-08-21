import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { GrantType } from '../../grant-type.value-object';
import { GrantTypeVariants } from '../../types';

export class SingleGrantTypeVariantSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<GrantTypeVariants>
{
  get valid() {
    return Object.keys(
      GrantType.GRANT_TYPES_VARIANTS
    ) as Iterable<GrantTypeVariants>;
  }
  get invalid() {
    return [];
  }
}
