import { ValidationRuleBase } from '@bh2old/ddd-expc';
import { IClientMetadataCreateValues } from '../../../models';
import { ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification } from '../../../specifications';

export class ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule extends ValidationRuleBase<IClientMetadataCreateValues> {
  constructor() {
    const specification =
      new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification();
    const message =
      `property: 'must be either collection or undefined', ` +
      `collection: 'at least one variant must be specified'`;
    const property = 'responseTypeVariants';

    super(specification, message, property);
  }
}
