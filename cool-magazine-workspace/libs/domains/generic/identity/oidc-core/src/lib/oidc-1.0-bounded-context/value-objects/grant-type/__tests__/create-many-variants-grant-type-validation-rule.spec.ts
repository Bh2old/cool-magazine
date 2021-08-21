import { CreateManyVariantsGrantTypeValidationRule } from '../rules';
import { GrantTypeVariants } from '../types';

describe('CreateManyVariantsGrantTypeValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new CreateManyVariantsGrantTypeValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(
        CreateManyVariantsGrantTypeValidationRule
      );
    });
  });

  describe('validation', () => {
    test('should return true if all variants are specified', () => {
      // Arrange
      const variants = new Set<GrantTypeVariants>().add('authorization_code');
      const instance = new CreateManyVariantsGrantTypeValidationRule();

      // Act
      const result = instance.validate(variants);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if variants are not specified', () => {
      // Arrange
      const variants = new Set<GrantTypeVariants>();
      const instance = new CreateManyVariantsGrantTypeValidationRule();

      // Act
      const result = instance.validate(variants);

      // Assert
      expect(result).toBe(false);
    });
  });
});
