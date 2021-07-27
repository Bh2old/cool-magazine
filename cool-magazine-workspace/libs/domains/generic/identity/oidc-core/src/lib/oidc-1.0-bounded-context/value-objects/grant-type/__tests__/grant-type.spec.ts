import { GrantType } from '../grant-type.value-object';
import { GrantTypeVariants } from '../types/grant-type-variants.type';

describe('GrantType', () => {
  describe('instance creation', () => {
    describe('single instance', () => {
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
    describe('many different instances', () => {
      test('should return collection of GrantTypes from collection of variants', () => {
        // Arrange
        const variant = 'authorizationCode';
        const variants = new Set<GrantTypeVariants>().add(variant);
        const expected = [GrantType.create(variant)];
        // Act
        const instances = GrantType.createMany(variants);

        // Assert
        expect(instances).toStrictEqual(expected);
      });
    });
  });

  describe('getting value', () => {
    test('should return not empty string value if type is specified', () => {
      // Arrange
      const grantTypeVariants = Object.keys(
        GrantType.GRANT_TYPES_BY_VARIANTS
      ) as GrantTypeVariants[];

      const grantTypes = Object.values(GrantType.GRANT_TYPES_BY_VARIANTS);

      // Act
      const grantTypeValues = grantTypeVariants.map(
        (variant) => GrantType.create(variant).value
      );

      // Assert
      expect(grantTypeValues).toStrictEqual(grantTypes);
    });

    test('should return default not empty value if type is not specified', () => {
      // Arrange
      const grantTypes = Object.values(GrantType.GRANT_TYPES_BY_VARIANTS);

      // Act
      const defaultGrantTypeValue = GrantType.createAsDefault().value;

      // Assert
      expect(grantTypes).toContain(defaultGrantTypeValue);
    });
  });
});
