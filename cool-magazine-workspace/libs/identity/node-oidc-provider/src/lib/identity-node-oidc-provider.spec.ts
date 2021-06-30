import { identityNodeOidcProvider } from './identity-node-oidc-provider';

describe('identityNodeOidcProvider', () => {
  it('should work', () => {
    expect(identityNodeOidcProvider()).toEqual(
      'identity-node-oidc-provider'
    );
  });
});
