import { ValidationRule } from '@bh2old/ddd-expc';
import { IClientMetadataCreateValues } from '../../../models';
import { ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification } from '../../../specifications';

export class ResponseTypeVariantsToGrantTypeVariantsCorrespondenceValidationRule extends ValidationRule<IClientMetadataCreateValues> {
  constructor() {
    const specification =
      new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification();
    const message = `'must satisfy ResponseTypeVariants to GrantTypeVariants correspondence'`;
    const property = 'responseTypeVariants&grantTypeVariants';

    super(specification, message, property);
  }
}
