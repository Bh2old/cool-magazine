import { GrantTypeDictionary } from '../../grant-type/data-structures';
import { GrantType } from '../../grant-type/grant-type.value-object';
import { RedirectUriDictionary } from '../../redirect-uri/data-structures';
import { RedirectUri } from '../../redirect-uri/redirect-uri.value-object';
import { ResponseTypeDictionary } from '../../response-type/data-structures';
import { ResponseType } from '../../response-type/response-type.value-object';
import { ClientMetadata } from '../client-metadata.value-object';
import { IClientMetadataCreateValues } from '../models';

describe('ClientMetadata', () => {
  let BEFORE_EACH_clientMetadataCreateValues: IClientMetadataCreateValues;

  beforeEach(() => {
    const redirectUriValue = 'http://qwerty.mn/';
    const redirectUri: RedirectUri = RedirectUri.create(redirectUriValue);

    const responseTypeValue = 'code';
    const responseType: ResponseType = ResponseType.create(responseTypeValue);

    const grantTypeValue = 'authorizationCode';
    const grantType: GrantType = GrantType.create(grantTypeValue);

    BEFORE_EACH_clientMetadataCreateValues = {
      redirectUris: new RedirectUriDictionary().add(redirectUri),
      responseTypes: new ResponseTypeDictionary().add(responseType),
      grantTypes: new GrantTypeDictionary().add(grantType),
    };
  });

  describe('instance creation', () => {
    test('should return instance of ClientMetadata', () => {
      // Arrange

      // Act
      const instance = ClientMetadata.create(
        BEFORE_EACH_clientMetadataCreateValues
      );

      //Assert
      expect(instance).toBeInstanceOf(ClientMetadata);
    });
  });

  describe('get redirectUris', () => {
    test('should return immutable redirectUri[]', () => {
      // Arrange
      const instance = ClientMetadata.create(
        BEFORE_EACH_clientMetadataCreateValues
      );
      const redirectUriValue = 'http://aboba.mn/';
      const redirectUri: RedirectUri = RedirectUri.create(redirectUriValue);

      // Act
      const redirectUris = instance.redirectUris;
      redirectUris.push(redirectUri);

      //Assert
      expect(redirectUris.length).not.toBe(instance.redirectUris.length);
    });
  });

  describe('get responseTypes', () => {
    test('should return immutable responseType[]', () => {
      // Arrange
      const instance = ClientMetadata.create(
        BEFORE_EACH_clientMetadataCreateValues
      );
      const responseTypeValue = 'code';
      const responseType: ResponseType = ResponseType.create(responseTypeValue);

      // Act
      const redirectUris = instance.responseTypes;
      redirectUris.push(responseType);

      //Assert
      expect(redirectUris.length).not.toBe(instance.responseTypes.length);
    });
  });

  describe('get grantTypes', () => {
    test('should return immutable grantType[]', () => {
      // Arrange
      const instance = ClientMetadata.create(
        BEFORE_EACH_clientMetadataCreateValues
      );
      const grantTypeValue = 'authorizationCode';
      const grantType: GrantType = GrantType.create(grantTypeValue);

      // Act
      const redirectUris = instance.grantTypes;
      redirectUris.push(grantType);

      //Assert
      expect(redirectUris.length).not.toBe(instance.grantTypes.length);
    });
  });
});
