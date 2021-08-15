import { CreateManyVariantsResponseTypeSpecification } from './../../specifications';
import { ValidationRule } from '@bh2old/ddd-expc';
import { ResponseTypeVariants } from '../../types';

export class CreateManyVariantsResponseTypeValidationRule extends ValidationRule<
  Set<ResponseTypeVariants>
> {
  constructor() {
    const specification = new CreateManyVariantsResponseTypeSpecification();
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
