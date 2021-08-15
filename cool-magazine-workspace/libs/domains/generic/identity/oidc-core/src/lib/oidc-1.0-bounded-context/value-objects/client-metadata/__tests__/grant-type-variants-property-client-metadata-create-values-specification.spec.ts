import { GrantTypeVariants } from '../../grant-type';
import { IClientMetadataCreateValues } from '../models';
import { GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification } from '../specifications';

describe('GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification
      );
    });
  });

  describe('requirements checking', () => {
    test('should return true if variants are undefined', () => {
      // Arrange
      const variants: IClientMetadataCreateValues = {
        redirectUris: new Set<string>(),
      };
      const instance =
        new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

      // Assert
      expect(result).toBe(true);
    });

    test('should return true if variants are specified', () => {
      // Arrange
      const variants: IClientMetadataCreateValues = {
        redirectUris: new Set<string>(),
        grantTypeVariants: new Set<GrantTypeVariants>().add(
          'authorizationCode'
        ),
      };

      const instance =
        new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if variants are not specified', () => {
      // Arrange
      const variants: IClientMetadataCreateValues = {
        redirectUris: new Set<string>(),
        grantTypeVariants: new Set<GrantTypeVariants>(),
      };

      const instance =
        new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

      // Assert
      expect(result).toBe(false);
    });
  });
});
