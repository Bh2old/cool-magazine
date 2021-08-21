import { CompositeSpecification } from '@bh2old/ddd-expc';
import { GrantTypeVariants } from '../../types';

export class CreateManyVariantsGrantTypeSpecification extends CompositeSpecification<
  Set<GrantTypeVariants>
> {
  isSatisfiedBy(candidate: Set<GrantTypeVariants>): boolean {
    return candidate.size !== 0;
  }
}
