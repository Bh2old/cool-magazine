import { ValidationRule } from '@bh2old/ddd-expc';
import { CreateManyUrisRedirectUriSpecification } from '../../specifications';

export class CreateManyUrisRedirectUriValidationRule extends ValidationRule<
  Set<string>
> {
  constructor() {
    const specification = new CreateManyUrisRedirectUriSpecification();
    const rules = {
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

    const property = 'uris';

    super(specification, message, property);
  }
}
