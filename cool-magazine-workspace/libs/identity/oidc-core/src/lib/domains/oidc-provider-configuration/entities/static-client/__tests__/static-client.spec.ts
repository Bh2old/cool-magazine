import {
  ClientId,
  ClientMetadata,
  GrantType,
  RedirectUri,
  ResponseType,
} from '../../../value-objects';
import { IClientRegistrationData } from '../models';
import { StaticClient } from '../static-client.entity';

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

describe('StaticClient', () => {
  describe('create', () => {
    test('should return instance of StaticClient', () => {
      expect(StaticClient.create(clientRegistrationData)).toBeInstanceOf(
        StaticClient
      );
    });
  });

  describe('clone', () => {
    test('should return clone of StaticClient', () => {
      const staticClient = StaticClient.create(clientRegistrationData);
      const clonedStaticClient = staticClient.clone();
      expect(staticClient === clonedStaticClient).toBeFalsy();
    });
  });
});
