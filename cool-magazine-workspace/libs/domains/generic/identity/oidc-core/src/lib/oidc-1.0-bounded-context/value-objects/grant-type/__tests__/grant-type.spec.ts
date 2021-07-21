import { GrantTypes } from '../enums';
import { GrantType } from '../grant-type.value-object';

describe('GrantType', () => {
  describe('instance creation', () => {
    test('should return instance of GrantType with specifying type', () => {
      // Arrange
      const params = GrantTypes.authorizationCode;

      // Act
      const instance = GrantType.create(params);

      // Assert
      expect(instance).toBeInstanceOf(GrantType);
    });

    test('should return instance of GrantType without specifying type', () => {
      // Arrange

      // Act
      const instance = GrantType.createAsDefault();

      // Assert
      expect(instance).toBeInstanceOf(GrantType);
    });
  });

  describe('getting value', () => {
    test('should return value according to GrantTypes if type is specified', () => {
      // Arrange
      type GrantTypesKeys = keyof typeof GrantTypes;
      const grantTypesKeys: GrantTypesKeys[] = Object.keys(
        GrantTypes
      ) as GrantTypesKeys[];
      const expectedGrantTypesValues = Object.values(GrantTypes);

      // Act
      const grantTypeValues = grantTypesKeys.map(
        (key) => GrantType.create(GrantTypes[key]).value
      );

      // Assert
      expect(grantTypeValues).toStrictEqual(expectedGrantTypesValues);
    });

    test('should return default value if type is not specified', () => {
      // Arrange
      const expectedDefaultGrantTypesValue = GrantTypes.authorizationCode;

      // Act
      const defaultGrantTypeValue = GrantType.createAsDefault().value;

      // Assert
      expect(defaultGrantTypeValue).toStrictEqual(
        expectedDefaultGrantTypesValue
      );
    });
  });
});
