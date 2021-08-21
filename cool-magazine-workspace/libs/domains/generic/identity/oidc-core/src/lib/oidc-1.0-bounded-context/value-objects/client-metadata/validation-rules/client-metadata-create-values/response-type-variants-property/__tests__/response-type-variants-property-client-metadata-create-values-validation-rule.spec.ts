import { ResponseTypeVariants } from '../../../../../response-type';
import { IClientMetadataCreateValues } from '../../../../models';
import { ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule } from '../response-type-variants-property-client-metadata-create-values-validation-rule';

describe('ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(
        ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule
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
        new ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule();

      // Act
      const result = instance.validate(variants);

      // Assert
      expect(result).toBe(true);
    });

    test('should return true if variants are specified', () => {
      // Arrange
      const variants: IClientMetadataCreateValues = {
        redirectUris: new Set<string>(),
        responseTypeVariants: new Set<ResponseTypeVariants>().add('code'),
      };

      const instance =
        new ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule();

      // Act
      const result = instance.validate(variants);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if variants are not specified', () => {
      // Arrange
      const variants: IClientMetadataCreateValues = {
        redirectUris: new Set<string>(),
        responseTypeVariants: new Set<ResponseTypeVariants>(),
      };

      const instance =
        new ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule();

      // Act
      const result = instance.validate(variants);

      // Assert
      expect(result).toBe(false);
    });
  });
});
