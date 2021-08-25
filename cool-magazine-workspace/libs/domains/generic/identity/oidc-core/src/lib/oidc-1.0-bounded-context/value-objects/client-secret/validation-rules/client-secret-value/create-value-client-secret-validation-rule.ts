import { ValidationRuleBase } from '@bh2old/ddd-expc';
import { CreateValueClientSecretSpecification } from '../../specifications';

export class CreateValueClientSecretValidationRule extends ValidationRuleBase<string> {
  constructor() {
    const specification = new CreateValueClientSecretSpecification();
    const message = `the value must be at least ${CreateValueClientSecretSpecification.STRING_LENGTH.min} in length`;
    const property = 'value';

    super(specification, message, property);
  }
}
