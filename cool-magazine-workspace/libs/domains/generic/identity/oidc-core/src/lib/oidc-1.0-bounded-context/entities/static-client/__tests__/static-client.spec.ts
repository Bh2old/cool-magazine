import {
  ClientId,
  ClientMetadata,
  GrantTypeVariants,
  IClientMetadataCreateValues,
  ResponseTypeVariants,
} from '../../../value-objects';
import { IClientRegistrationData } from '../models';
import { StaticClient } from '../static-client.entity';

describe('StaticClient', () => {
  let clientRegistrationData: IClientRegistrationData;
  beforeEach(() => {
    const idValue = '123';
    const id: ClientId = ClientId.create(idValue);

    const redirectUriValue = 'http://qwerty.mn/';
    const responseTypeValue = 'code';
    const grantTypeValue = 'authorizationCode';

    const clientMetadataCreateValues: IClientMetadataCreateValues = {
      redirectUris: new Set<string>().add(redirectUriValue),
      responseTypeVariants: new Set<ResponseTypeVariants>().add(
        responseTypeValue
      ),
      grantTypeVariants: new Set<GrantTypeVariants>().add(grantTypeValue),
    };

    const metadata = ClientMetadata.create(clientMetadataCreateValues);

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
