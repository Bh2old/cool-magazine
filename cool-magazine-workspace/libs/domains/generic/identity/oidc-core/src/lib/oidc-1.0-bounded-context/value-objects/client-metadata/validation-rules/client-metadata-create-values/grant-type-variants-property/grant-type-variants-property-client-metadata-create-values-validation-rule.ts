import { ValidationRule } from '@bh2old/ddd-expc';
import { IClientMetadataCreateValues } from '../../../models';
import { GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification } from '../../../specifications';

export class GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule extends ValidationRule<IClientMetadataCreateValues> {
  constructor() {
    const specification =
      new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();
    const message =
      `property: 'must be either collection or undefined', ` +
      `collection: 'at least one uri must be specified', ` +
      `variants: 'must satisfy ResponseTypeVariants to GrantTypeVariants correspondence'`;
    const property = 'responseTypeVariants';

    super(specification, message, property);
  }
}
