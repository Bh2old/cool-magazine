import { ValidationRule } from '@bh2old/ddd-expc';
import { ManyRedirectUriVariantsSpecification } from '../../specifications';

export class ManyRedirectUriVariantsValidationRule extends ValidationRule<
  Set<string>
> {
  constructor() {
    const specification = new ManyRedirectUriVariantsSpecification();
    const message =
      `collection: 'at least one uri must be specified', ` +
      `scheme: 'URIs must use the HTTPS scheme, not plain HTTP. Localhost URIs (including localhost IP address URIs) are exempt from this rule.' ,` +
      `host: 'Hosts cannot be raw IP addresses. Localhost IP addresses are exempted from this rule.', ` +
      `userInfo: 'Redirect URIs cannot contain the userinfo subcomponent.', ` +
      `path: 'Redirect URIs cannot contain a path traversal (also called directory backtracking), which is represented by an “/..” or “..” or their URL encoding.'`;
    const property = 'uris';

    super(specification, message, property);
  }
}
