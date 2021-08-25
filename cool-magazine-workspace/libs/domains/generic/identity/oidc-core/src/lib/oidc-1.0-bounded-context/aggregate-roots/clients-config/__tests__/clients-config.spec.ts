import {
  GrantTypeVariants,
  ResponseTypeVariants,
} from '../../../value-objects';
import { IClientsConfigCreateData } from '../models';
import { ClientsConfig } from '../clients-config.entity';

describe('StaticClientsConfig', () => {
  let staticClientsConfigCreateData: IClientsConfigCreateData;

  beforeEach(() => {
    const id = '123';

    const redirectUriValue = 'http://qwerty.mn/';
    const responseTypeValue = 'code';
    const grantTypeValue = 'authorization_code';

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
        ClientsConfig.create(staticClientsConfigCreateData)
      ).toBeInstanceOf(ClientsConfig);
    });
  });

  describe('getting clients', () => {
    test('should return collection which does not mutate internal collection if changed', () => {
      // Arrange
      const staticClientsConfig = ClientsConfig.create(
        staticClientsConfigCreateData
      );

      // Act
      const clientsForMutation = staticClientsConfig.clients as unknown[];
      clientsForMutation.push({});

      // Assert
      expect(clientsForMutation.length).not.toBe(
        staticClientsConfig.clients.length
      );
    });

    test('should return collection which does not mutate item of internal collection if received item changed', () => {
      // Arrange
      const staticClientsConfig = ClientsConfig.create(
        staticClientsConfigCreateData
      );

      const clonedClientsForMutation: Record<string, unknown>[] =
        staticClientsConfig.clients as Record<string, unknown>[];

      // Act
      const indexMutatedItem = 0;
      const nameNewProperty = 'addNewPropWithJoke';
      clonedClientsForMutation[indexMutatedItem][nameNewProperty] = true;

      // Assert
      expect(staticClientsConfig.clients[indexMutatedItem]).not.toHaveProperty(
        nameNewProperty,
        true
      );
    });
  });
});
