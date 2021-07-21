import { GRANT_TYPES, GRANT_TYPE_VARIANTS } from '../constants';
import { GrantType } from '../grant-type.value-object';

describe('GrantType', () => {
  describe('instance creation', () => {
    test('should return instance of GrantType with specifying type', () => {
      // Arrange
      const params = 'authorizationCode';

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
    test('should return not empty string value if type is specified', () => {
      // Arrange
      // Act
      const grantTypeValues = GRANT_TYPE_VARIANTS.map(
        (variant) => GrantType.create(variant).value
      );

      // Assert
      expect(grantTypeValues).toEqual(expect.arrayContaining([...GRANT_TYPES]));
    });

    test('should return default not empty value if type is not specified', () => {
      // Arrange
      // Act
      const defaultGrantTypeValue = GrantType.createAsDefault().value;

      // Assert
      expect(GRANT_TYPES).toContain(defaultGrantTypeValue);
    });
  });
});
