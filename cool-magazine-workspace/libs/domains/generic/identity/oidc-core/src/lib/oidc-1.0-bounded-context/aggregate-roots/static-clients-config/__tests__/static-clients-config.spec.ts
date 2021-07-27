import { IClientRegistrationData } from '../../../entities/static-client';
import {
  ClientId,
  ClientMetadata,
  GrantTypeVariants,
  IClientMetadataCreateValues,
  ResponseTypeVariants,
} from '../../../value-objects';
import { IStaticClientsConfigCreateData } from '../models';
import { StaticClientsConfig } from '../static-clients-config.entity';

describe('StaticClientsConfig', () => {
  let staticClientsConfigCreateData: IStaticClientsConfigCreateData;

  beforeEach(() => {
    const id = '123';

    const redirectUriValue = 'http://qwerty.mn/';
    const responseTypeValue = 'code';
    const grantTypeValue = 'authorizationCode';

    const clientRegistrationData = {
      id,
      metadata: {
        redirectUris: new Set<string>().add(redirectUriValue),
        responseTypeVariants: new Set<ResponseTypeVariants>().add(
          responseTypeValue
        ),
        grantTypeVariants: new Set<GrantTypeVariants>().add(grantTypeValue),
      },
    };

    staticClientsConfigCreateData = {
      clients: new Map().set(clientRegistrationData.id, clientRegistrationData),
    };
  });

  describe('instance creation', () => {
    test('should return instance of StaticClientsConfig', () => {
      expect(
        StaticClientsConfig.create(staticClientsConfigCreateData)
      ).toBeInstanceOf(StaticClientsConfig);
    });
  });

  describe('getting clients', () => {
    test('should return collection which do not mutate internal collection when push', () => {
      // Arrange
      const staticClientsConfig = StaticClientsConfig.create(
        staticClientsConfigCreateData
      );

      const clonedClientsForMutation: unknown[] =
        staticClientsConfig.clients as unknown[];

      // Act
      const countNewItemForPush = 3;
      for (let index = 0; index < countNewItemForPush; index++) {
        clonedClientsForMutation.push({});
      }

      // Assert
      expect(clonedClientsForMutation.length).toBe(
        staticClientsConfig.clients.length + countNewItemForPush
      );
    });

    test('should return collection which do not mutate internal collection when item mutated', () => {
      // Arrange
      const staticClientsConfig = StaticClientsConfig.create(
        staticClientsConfigCreateData
      );

      const clonedClientsForMutation: unknown[] =
        staticClientsConfig.clients as unknown[];

      // Act
      const indexMutatedItem = 0;
      const nameNewProperty = 'addNewPropWithJoke';
      clonedClientsForMutation[indexMutatedItem][nameNewProperty] = true;

      // Assert
      expect(staticClientsConfig.clients[indexMutatedItem]).not.toHaveProperty(
        nameNewProperty
      );
    });
  });
});
