import { ValidationRule } from '@bh2old/ddd-expc';
import { IClientMetadataCreateValues } from '../../models';
import { RedirectUrisPropertyClientMetadataCreateValuesSpecification } from '../../specifications';

export class RedirectUrisPropertyClientMetadataCreateValuesValidationRule extends ValidationRule<IClientMetadataCreateValues> {
  constructor() {
    const rules = {
      collection: 'at least one uri must be specified',
      scheme:
        'URIs must use the HTTPS scheme, not plain HTTP. Localhost URIs (including localhost IP address URIs) are exempt from this rule.',
      host: 'Hosts cannot be raw IP addresses. Localhost IP addresses are exempted from this rule.',
      userInfo: 'Redirect URIs cannot contain the userinfo subcomponent.',
      path: 'Redirect URIs cannot contain a path traversal (also called directory backtracking), which is represented by an “/..” or “..” or their URL encoding.',
    };

    const message = Object.entries(rules)
      .reduce((rulesText, rule, index) => {
        const [ruleName, ruleDescription] = rule;
        return (rulesText += `${index + 1}) ${ruleName}: ${ruleDescription} `);
      }, '')
      .trim();

    const property = 'redirectUris';

    super(
      new RedirectUrisPropertyClientMetadataCreateValuesSpecification(),
      message,
      property
    );
  }
}
