import {
  GrantTypeVariants,
  ResponseTypeVariants,
} from '../../../value-objects';
import { IClientRegistrationData } from '../models';
import { Client } from '../client.entity';

describe('Client', () => {
  let clientRegistrationData: IClientRegistrationData;

  beforeEach(() => {
    const id = '123';

    const redirectUriValue = 'http://qwerty.mn/';
    const responseTypeValue = 'code';
    const grantTypeValue = 'authorization_code';

    clientRegistrationData = {
      id,
      metadata: {
        redirectUris: new Set<string>().add(redirectUriValue),
        responseTypeVariants: new Set<ResponseTypeVariants>().add(
          responseTypeValue
        ),
        grantTypeVariants: new Set<GrantTypeVariants>().add(grantTypeValue),
      },
    };
  });

  describe('instance creation', () => {
    test('should return instance of Client', () => {
      expect(Client.create(clientRegistrationData)).toBeInstanceOf(Client);
    });
  });

  describe('get metadata', () => {
    test('should return immutable metadata', () => {
      // Arrange
      const staticClient = Client.create(clientRegistrationData);
      const mutationPropertyKey = 'mutation';
      const mutationPropertyValue = 'i mutated';
      // Act
      const metadata: Record<string, unknown> = staticClient.metadata;
      metadata[mutationPropertyKey] = mutationPropertyValue;

      //Assert
      expect(staticClient.metadata).not.toHaveProperty(
        mutationPropertyKey,
        mutationPropertyValue
      );
    });
  });

  describe('getting immutable clone of yourself ', () => {
    test('should return cloned instance of Client', () => {
      // Arrange
      const staticClient = Client.create(clientRegistrationData);

      // Act
      const clonedStaticClient = staticClient.clone();

      // Assert
      expect(staticClient === clonedStaticClient).toBeFalsy();
    });
  });
});
