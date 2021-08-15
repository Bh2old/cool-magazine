import { ValidationRule } from '@bh2old/ddd-expc';
import { IClientMetadataCreateValues } from '../../models';
import { ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification } from '../../specifications';

export class ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule extends ValidationRule<IClientMetadataCreateValues> {
  constructor() {
    const rules = {
      property: 'must be either collection or undefined',
      collection: 'at least one uri must be specified',
    };

    const message = Object.entries(rules)
      .reduce((rulesText, rule, index) => {
        const [ruleName, ruleDescription] = rule;
        return (rulesText += `${index + 1}) ${ruleName}: ${ruleDescription} `);
      }, '')
      .trim();

    const property = 'responseTypeVariants';

    super(
      new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification(),
      message,
      property
    );
  }
}
