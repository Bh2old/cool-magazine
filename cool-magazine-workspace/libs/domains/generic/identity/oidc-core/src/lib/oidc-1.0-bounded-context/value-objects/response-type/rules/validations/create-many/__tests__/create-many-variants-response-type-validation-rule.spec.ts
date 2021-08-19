import { CreateManyVariantsResponseTypeVariantsUsage } from '../../../../specifications';
import { ResponseTypeVariants } from '../../../../types';
import { CreateManyVariantsResponseTypeValidationRule } from '../create-many-variants-response-type-validation-rule';

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
    test('should return true for all valid variants', () => {
      // Arrange
      const variants =
        CreateManyVariantsResponseTypeVariantsUsage.getAllValidVariants();
      const instance = new CreateManyVariantsResponseTypeValidationRule();

      // Act
      const result = variants.reduce((isValid, variant) => {
        return isValid && instance.validate(variant);
      }, true);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false for all invalid variants', () => {
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
