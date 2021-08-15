import { CreateManyVariantsGrantTypeSpecification } from './../../specifications';
import { ValidationRule } from '@bh2old/ddd-expc';
import { GrantTypeVariants } from '../../types';

export class CreateManyVariantsGrantTypeValidationRule extends ValidationRule<
  Set<GrantTypeVariants>
> {
  constructor() {
    const specification = new CreateManyVariantsGrantTypeSpecification();
    const rules = {
      collection: 'at least one variant must be specified',
    };

    const message = Object.entries(rules)
      .reduce((rulesText, rule, index) => {
        const [ruleName, ruleDescription] = rule;
        return (rulesText += `${index + 1}) ${ruleName}: ${ruleDescription} `);
      }, '')
      .trim();

    const property = 'variants';
    super(specification, message, property);
  }
}
