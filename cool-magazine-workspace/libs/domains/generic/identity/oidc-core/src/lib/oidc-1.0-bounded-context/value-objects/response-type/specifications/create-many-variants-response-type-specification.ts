import { CompositeSpecification } from '@bh2old/ddd-expc';
import { ResponseTypeVariants } from '../types';

export class CreateManyVariantsResponseTypeSpecification extends CompositeSpecification<
  Set<ResponseTypeVariants>
> {
  isSatisfiedBy(candidate: Set<ResponseTypeVariants>): boolean {
    return candidate.size !== 0;
  }
}
