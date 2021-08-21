import { ResponseTypeVariants } from '../../../../../response-type';
import { IClientMetadataCreateValues } from '../../../../models';
import { ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification } from '../../../../specifications';

describe('ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification
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
        new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

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
        new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

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
        new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

      // Assert
      expect(result).toBe(false);
    });
  });
});
