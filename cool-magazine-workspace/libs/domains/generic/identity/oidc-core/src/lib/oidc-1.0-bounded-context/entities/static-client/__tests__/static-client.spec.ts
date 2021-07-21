import {
  ClientId,
  ClientMetadata,
  RedirectUri,
  ResponseType,
} from '../../../value-objects';
import { GrantType, GrantTypes } from '../../../value-objects/grant-type';
import { IClientRegistrationData } from '../models';
import { StaticClient } from '../static-client.entity';

describe('StaticClient', () => {
  let clientRegistrationData: IClientRegistrationData;
  beforeEach(() => {
    const idValue = '123';
    const id: ClientId = ClientId.create(idValue);

    const redirectUriValue = 'http://qwerty.mn/';
    const redirectUri: RedirectUri = RedirectUri.create(redirectUriValue);

    const responseTypeValue = 'code';
    const responseType: ResponseType = ResponseType.create(responseTypeValue);

    const grantTypeValue = GrantTypes.authorizationCode;
    const grantType: GrantType = GrantType.create(grantTypeValue);

    const metadata: ClientMetadata = ClientMetadata.create({
      redirectUris: [redirectUri],
      responseTypes: [responseType],
      grantTypes: [grantType],
    });

    clientRegistrationData = {
      id,
      metadata,
    };
  });
  describe('instance creation', () => {
    test('should return instance of StaticClient', () => {
      expect(StaticClient.create(clientRegistrationData)).toBeInstanceOf(
        StaticClient
      );
    });
  });

  describe('getting immutable clone of yourself ', () => {
    test('should return cloned instance of StaticClient', () => {
      // Arrange
      const staticClient = StaticClient.create(clientRegistrationData);

      // Act
      const clonedStaticClient = staticClient.clone();

      // Assert
      expect(staticClient === clonedStaticClient).toBeFalsy();
    });
  });
});
