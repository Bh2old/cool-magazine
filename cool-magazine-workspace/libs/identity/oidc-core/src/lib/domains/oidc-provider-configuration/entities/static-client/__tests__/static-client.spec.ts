import {
  ClientId,
  ClientMetadata,
  GrantType,
  RedirectUri,
  ResponseType,
} from '../../../value-objects';
import { IClientRegistrationData } from '../models';
import { StaticClient } from '../static-client.entity';

describe('StaticClient', () => {
  describe('create', () => {
    test('should return instance of StaticClient', () => {
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

      expect(StaticClient.create(clientRegistrationData)).toBeInstanceOf(
        StaticClient
      );
    });
  });
});
