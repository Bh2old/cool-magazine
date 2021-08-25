import { ValidationRuleBase } from '@bh2old/ddd-expc';
import { SingleRedirectUriVariantSpecification } from '../../specifications';

export class SingleRedirectUriVariantValidationRule extends ValidationRuleBase<string> {
  constructor() {
    const specification = new SingleRedirectUriVariantSpecification();
    const message =
      `scheme: 'URIs must use the HTTPS scheme, not plain HTTP. Localhost URIs (including localhost IP address URIs) are exempt from this rule.' ,` +
      `host: 'Hosts cannot be raw IP addresses. Localhost IP addresses are exempted from this rule.', ` +
      `userInfo: 'Redirect URIs cannot contain the userinfo subcomponent.', ` +
      `path: 'Redirect URIs cannot contain a path traversal (also called directory backtracking), which is represented by an “/..” or “..” or their URL encoding.'`;
    const property = 'uri';

    super(specification, message, property);
  }
}
