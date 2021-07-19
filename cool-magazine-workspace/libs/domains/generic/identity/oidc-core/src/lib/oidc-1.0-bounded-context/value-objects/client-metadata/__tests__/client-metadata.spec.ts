import { GrantType } from '../../grant-type/grant-type.value-object';
import { RedirectUri } from '../../redirect-uri/redirect-uri.value-object';
import { ResponseType } from '../../response-type/response-type.value-object';
import { ClientMetadata } from '../client-metadata.value-object';

describe('ClientMetadata', () => {
  describe('instance creation', () => {
    test('should return instance of ClientMetadata', () => {
      // Arrange
      const redirectUriValue = 'http://qwerty.mn/';
      const redirectUri: RedirectUri = RedirectUri.create(redirectUriValue);

      const responseTypeValue = 'code';
      const responseType: ResponseType = ResponseType.create(responseTypeValue);

      const grantTypeValue = 'access_code';
      const grantType: GrantType = GrantType.create(grantTypeValue);

      const metadata: ClientMetadata = ClientMetadata.create({
        redirectUris: [redirectUri],
        responseTypes: [responseType],
        grantTypes: [grantType],
      });

      // Act
      const instance = ClientMetadata.create(metadata);

      //Assert
      expect(instance).toBeInstanceOf(ClientMetadata);
    });
  });
});
