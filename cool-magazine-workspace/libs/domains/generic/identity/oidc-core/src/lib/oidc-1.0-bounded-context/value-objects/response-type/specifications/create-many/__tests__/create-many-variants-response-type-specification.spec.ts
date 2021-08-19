import { CreateManyVariantsResponseTypeSpecification } from '../create-many-variants-response-type-specification';
import { CreateManyVariantsResponseTypeVariantsUsage } from '../create-many-variants-response-type-variants-usage';

describe('CreateManyVariantsResponseTypeSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new CreateManyVariantsResponseTypeSpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        CreateManyVariantsResponseTypeSpecification
      );
    });
  });

  describe('requirements checking', () => {
    test('should return true if all variants are specified', () => {
      // Arrange
      const variants =
        CreateManyVariantsResponseTypeVariantsUsage.valid.specified;
      const instance = new CreateManyVariantsResponseTypeSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if variants are not specified', () => {
      // Arrange
      const variants =
        CreateManyVariantsResponseTypeVariantsUsage.invalid.notSpecified;
      const instance = new CreateManyVariantsResponseTypeSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

      // Assert
      expect(result).toBe(false);
    });
  });
});
