import { GrantTypeVariants } from '../../grant-type';
import { IClientMetadataCreateValues } from '../models';
import { GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule } from '../rules';

describe('GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(
        GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule
      );
    });
  });

  describe('validation', () => {
    test('should return true if variants are undefined', () => {
      // Arrange
      const variants: IClientMetadataCreateValues = {
        redirectUris: new Set<string>(),
      };
      const instance =
        new GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule();

      // Act
      const result = instance.validate(variants);

      // Assert
      expect(result).toBe(true);
    });

    test('should return true if variants are specified', () => {
      // Arrange
      const variants: IClientMetadataCreateValues = {
        redirectUris: new Set<string>(),
        grantTypeVariants: new Set<GrantTypeVariants>().add(
          'authorization_code'
        ),
      };

      const instance =
        new GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule();

      // Act
      const result = instance.validate(variants);

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
        new GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule();

      // Act
      const result = instance.validate(variants);

      // Assert
      expect(result).toBe(false);
    });
  });
});
