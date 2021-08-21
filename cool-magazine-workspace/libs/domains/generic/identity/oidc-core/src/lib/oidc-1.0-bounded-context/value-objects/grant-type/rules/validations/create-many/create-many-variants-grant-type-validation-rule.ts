import { CreateManyVariantsGrantTypeSpecification } from '../../../specifications';
import { ValidationRule } from '@bh2old/ddd-expc';
import { GrantTypeVariants } from '../../../types';

export class CreateManyVariantsGrantTypeValidationRule extends ValidationRule<
  Set<GrantTypeVariants>
> {
  constructor() {
    const specification = new CreateManyVariantsGrantTypeSpecification();
    const message = `collection: 'at least one variant must be specified'`;
    const property = 'variants';

    super(specification, message, property);
  }
}
