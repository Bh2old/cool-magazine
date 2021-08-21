import { ValidationRule } from '@bh2old/ddd-expc';
import { ManyResponseTypeVariantsSpecification } from '../../specifications';
import { ResponseTypeVariants } from '../../types';

export class ManyResponseTypeVariantsValidationRule extends ValidationRule<
  Set<ResponseTypeVariants>
> {
  constructor() {
    const specification = new ManyResponseTypeVariantsSpecification();
    const message = `collection: 'at least one variant must be specified'`;
    const property = 'variants';

    super(specification, message, property);
  }
}
