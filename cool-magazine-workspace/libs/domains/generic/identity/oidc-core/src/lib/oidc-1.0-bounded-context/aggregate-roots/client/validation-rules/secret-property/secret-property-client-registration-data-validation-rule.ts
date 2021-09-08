import { ValidationRuleBase } from '@bh2old/ddd-expc';
import { IClientRegistrationData } from '../../models';
import { SecretPropertyClientRegistrationDataSpecification } from '../../specifications';

export class SecretPropertyClientRegistrationDataValidationRule extends ValidationRuleBase<IClientRegistrationData> {
  constructor() {
    const specification =
      new SecretPropertyClientRegistrationDataSpecification();
    const message =
      `property: 'must be either string value or undefined', ` +
      `string value: 'must be at least ${SecretPropertyClientRegistrationDataSpecification.STRING_LENGTH.min} in length'`;
    const property = 'secret';

    super(specification, message, property);
  }
}
