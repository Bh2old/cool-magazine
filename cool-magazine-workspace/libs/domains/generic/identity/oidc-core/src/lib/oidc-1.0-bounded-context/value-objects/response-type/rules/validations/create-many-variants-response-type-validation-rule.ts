import { CreateManyVariantsResponseTypeSpecification } from './../../specifications';
import { ValidationRule } from '@bh2old/ddd-expc';
import { ResponseTypeVariants } from '../../types';

export class CreateManyVariantsResponseTypeValidationRule extends ValidationRule<
  Set<ResponseTypeVariants>
> {
  constructor() {
    const specification = new CreateManyVariantsResponseTypeSpecification();
    const message = `collection: 'at least one variant must be specified'`;
    const property = 'variants';

    super(specification, message, property);
  }
}
