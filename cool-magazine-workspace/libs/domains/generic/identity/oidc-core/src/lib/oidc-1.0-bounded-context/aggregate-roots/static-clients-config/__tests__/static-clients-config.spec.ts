import {
  GrantTypeVariants,
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
        StaticClientsConfig.create(staticClientsConfigCreateData)
      ).toBeInstanceOf(StaticClientsConfig);
    });
  });

  describe('getting clients', () => {
    test('should return collection which does not mutate internal collection if changed', () => {
      // Arrange
      const staticClientsConfig = StaticClientsConfig.create(
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
        nameNewProperty,
        true
      );
    });
  });
});
