import { GrantTypeVariants } from '../../grant-type/types/grant-type-variants.type';
import { ResponseTypeVariants } from '../../response-type/types/response-type-variants.type';
import { ClientMetadata } from '../client-metadata.value-object';
import { IClientMetadataCreateValues } from '../models';

describe('ClientMetadata', () => {
  let BEFORE_EACH_clientMetadataCreateValues: IClientMetadataCreateValues;

  beforeEach(() => {
    const redirectUriValue = 'http://qwerty.mn/';
    const responseTypeValue = 'code';
    const grantTypeValue = 'authorizationCode';

    BEFORE_EACH_clientMetadataCreateValues = {
      redirectUris: new Set<string>().add(redirectUriValue),
      responseTypeVariants: new Set<ResponseTypeVariants>().add(
        responseTypeValue
      ),
      grantTypeVariants: new Set<GrantTypeVariants>().add(grantTypeValue),
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

      // Act
      const redirectUris = instance.redirectUrisValues;
      (redirectUris as string[]).push(redirectUriValue);

      //Assert
      expect(redirectUris.length).not.toBe(instance.redirectUrisValues.length);
    });
  });

  describe('get responseTypes', () => {
    test('should return immutable responseType[]', () => {
      // Arrange
      const instance = ClientMetadata.create(
        BEFORE_EACH_clientMetadataCreateValues
      );
      const responseTypeValue = 'code';

      // Act
      const redirectUris = instance.responseTypesValues;
      (redirectUris as string[]).push(responseTypeValue);

      //Assert
      expect(redirectUris.length).not.toBe(instance.responseTypesValues.length);
    });
  });

  describe('get grantTypes', () => {
    test('should return immutable grantType[]', () => {
      // Arrange
      const instance = ClientMetadata.create(
        BEFORE_EACH_clientMetadataCreateValues
      );
      const grantTypeValue = 'authorizationCode';

      // Act
      const redirectUris = instance.grantTypesValues;
      (redirectUris as string[]).push(grantTypeValue);

      //Assert
      expect(redirectUris.length).not.toBe(instance.grantTypesValues.length);
    });
  });
});
