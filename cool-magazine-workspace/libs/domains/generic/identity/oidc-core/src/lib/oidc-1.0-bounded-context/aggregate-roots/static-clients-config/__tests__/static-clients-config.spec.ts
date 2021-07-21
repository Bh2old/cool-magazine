import { IClientRegistrationData } from '../../../entities/static-client';
import {
  ClientId,
  ClientMetadata,
  GrantType,
  RedirectUri,
  ResponseType,
} from '../../../value-objects';
import { StaticClientsConfigCreateData } from '../models';
import { StaticClientsConfig } from '../static-clients-config.entity';

describe('StaticClientsConfig', () => {
  let staticClientsConfigCreateData: StaticClientsConfigCreateData;

  beforeEach(() => {
    const idValue = '123';
    const id: ClientId = ClientId.create(idValue);

    const redirectUriValue = 'http://qwerty.mn/';
    const redirectUri: RedirectUri = RedirectUri.create(redirectUriValue);

    const responseTypeValue = 'code';
    const responseType: ResponseType = ResponseType.create(responseTypeValue);

    const grantTypeValue = 'authorizationCode';
    const grantType: GrantType = GrantType.create(grantTypeValue);

    const metadata: ClientMetadata = ClientMetadata.create({
      redirectUris: [redirectUri],
      responseTypes: [responseType],
      grantTypes: [grantType],
    });

    const clientRegistrationData: IClientRegistrationData = {
      id,
      metadata,
    };

    staticClientsConfigCreateData = {
      clients: [clientRegistrationData],
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
