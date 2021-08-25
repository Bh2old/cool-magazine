import { ValidationRuleBase } from '@bh2old/ddd-expc';
import { IClientMetadataCreateValues } from '../../../models';
import { GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification } from '../../../specifications';

export class GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule extends ValidationRuleBase<IClientMetadataCreateValues> {
  constructor() {
    const specification =
      new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();
    const message =
      `property: 'must be either collection or undefined', ` +
      `collection: 'at least one variant must be specified'`;
    const property = 'grantTypeVariants';

    super(specification, message, property);
  }
}
