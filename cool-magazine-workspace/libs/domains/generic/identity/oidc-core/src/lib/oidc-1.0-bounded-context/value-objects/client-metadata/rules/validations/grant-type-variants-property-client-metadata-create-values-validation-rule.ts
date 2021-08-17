import { ValidationRule } from '@bh2old/ddd-expc';
import { IClientMetadataCreateValues } from '../../models';
import { GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification } from '../../specifications';

export class GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule extends ValidationRule<IClientMetadataCreateValues> {
  constructor() {
    const rules = {
      property: 'must be either collection or undefined',
      collection: 'at least one uri must be specified',
      variants:
        'must satisfy ResponseTypeVariants to GrantTypeVariants correspondence',
    };

    const message = Object.entries(rules)
      .reduce((rulesText, rule, index) => {
        const [ruleName, ruleDescription] = rule;
        return (rulesText += `${index + 1}) ${ruleName}: ${ruleDescription} `);
      }, '')
      .trim();

    const property = 'responseTypeVariants';

    super(
      new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification(),
      message,
      property
    );
  }
}
