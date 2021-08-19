import { CreateManyVariantsResponseTypeSpecification } from '../create-many-variants-response-type-specification';
import { CreateManyVariantsResponseTypeSpecificationInvariantTable } from '../create-many-variants-response-type-specification-invariant-table';

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
        new CreateManyVariantsResponseTypeSpecificationInvariantTable().valid
          .code;
      const instance = new CreateManyVariantsResponseTypeSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if variants are not specified', () => {
      // Arrange
      const variants =
        new CreateManyVariantsResponseTypeSpecificationInvariantTable().invalid
          .emptyCollection;
      const instance = new CreateManyVariantsResponseTypeSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

      // Assert
      expect(result).toBe(false);
    });
  });
});
