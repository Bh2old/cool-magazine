import { CreateManyVariantsResponseTypeValidationRule } from '../rules';
import { ResponseTypeVariants } from '../types';

describe('CreateManyVariantsResponseTypeValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new CreateManyVariantsResponseTypeValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(
        CreateManyVariantsResponseTypeValidationRule
      );
    });
  });

  describe('validation', () => {
    test('should return true if all variants are specified', () => {
      // Arrange
      const variants = new Set<ResponseTypeVariants>().add('code');
      const instance = new CreateManyVariantsResponseTypeValidationRule();

      // Act
      const result = instance.validate(variants);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if variants are not specified', () => {
      // Arrange
      const variants = new Set<ResponseTypeVariants>();
      const instance = new CreateManyVariantsResponseTypeValidationRule();

      // Act
      const result = instance.validate(variants);

      // Assert
      expect(result).toBe(false);
    });
  });
});
