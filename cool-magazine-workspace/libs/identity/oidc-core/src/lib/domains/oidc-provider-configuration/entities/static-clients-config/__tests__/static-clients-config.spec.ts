import {
  ClientId,
  ClientMetadata,
  GrantType,
  RedirectUri,
  ResponseType,
} from '../../../value-objects';
import { IClientRegistrationData } from '../../static-client';
import { StaticClientsConfigCreateData } from '../models';
import { StaticClientsConfig } from '../static-clients-config.entity';

describe('StaticClientsConfig', () => {
  describe('create', () => {
    test('should return instance of StaticClientsConfig', () => {
      expect(StaticClientsConfig.create({ clients: [] })).toBeInstanceOf(
        StaticClientsConfig
      );
    });
  });

  describe('clients', () => {
    test('should return cloned clients', () => {
      const idValue = '123';
      const id: ClientId = ClientId.create(idValue);

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

      const clientRegistrationData: IClientRegistrationData = {
        id,
        metadata,
      };

      const staticClientsConfigCreateData: StaticClientsConfigCreateData = {
        clients: [clientRegistrationData],
      };

      const staticClientsConfig: StaticClientsConfig =
        StaticClientsConfig.create(staticClientsConfigCreateData);

      const clonedClientsForMutation: unknown[] =
        staticClientsConfig.clients as unknown[];
      const originalCountClients = staticClientsConfig.clients.length;

      const countNewItemForPush = 3;
      for (let index = 0; index < countNewItemForPush; index++) {
        clonedClientsForMutation.push({});
      }

      expect(staticClientsConfig.clients.length).toEqual(originalCountClients);

      expect(clonedClientsForMutation.length).toEqual(
        originalCountClients + countNewItemForPush
      );
    });
  });
});
