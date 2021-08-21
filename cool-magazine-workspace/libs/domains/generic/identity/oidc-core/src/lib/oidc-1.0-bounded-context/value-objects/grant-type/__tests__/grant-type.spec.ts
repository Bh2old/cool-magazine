import { GrantType } from '../grant-type.value-object';
import { GrantTypeVariants } from '../types';

describe('GrantType', () => {
  describe('instance creation', () => {
    describe('single instance', () => {
      test('should return instance of GrantType with specifying type', () => {
        // Arrange
        const params = 'authorization_code';

        // Act
        const instance = GrantType.create(params);

        // Assert
        expect(instance).toBeInstanceOf(GrantType);
      });
    });
    describe('many different instances', () => {
      test('should return collection of GrantTypes from collection of variants', () => {
        // Arrange
        const variant = 'authorization_code';
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
        GrantType.GRANT_TYPES_VARIANTS
      ) as GrantTypeVariants[];

      // Act
      const grantTypeValues = grantTypeVariants.map(
        (variant) => GrantType.create(variant).value
      );

      // Assert
      expect(grantTypeValues).toStrictEqual(grantTypeVariants);
    });
  });
});
