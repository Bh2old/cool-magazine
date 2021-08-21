import {
  GrantTypeVariants,
  ResponseTypeVariants,
} from '../../../value-objects';
import { IClientRegistrationData } from '../models';
import { StaticClient } from '../static-client.entity';

describe('StaticClient', () => {
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
    test('should return instance of StaticClient', () => {
      expect(StaticClient.create(clientRegistrationData)).toBeInstanceOf(
        StaticClient
      );
    });
  });

  describe('get metadata', () => {
    test('should return immutable metadata', () => {
      // Arrange
      const staticClient = StaticClient.create(clientRegistrationData);
      const mutationPropertyKey = 'mutation';
      const mutationPropertyValue = 'i mutated';
      // Act
      const metadata = staticClient.metadata;
      (metadata as unknown)[mutationPropertyKey] = mutationPropertyValue;

      //Assert
      expect(staticClient.metadata).not.toHaveProperty(
        mutationPropertyKey,
        mutationPropertyValue
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
