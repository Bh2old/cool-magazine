import { CreateManyVariantsGrantTypeSpecification } from '../specifications';
import { GrantTypeVariants } from '../types';

describe('CreateManyVariantsGrantTypeSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new CreateManyVariantsGrantTypeSpecification();

      // Assert
      expect(instance).toBeInstanceOf(CreateManyVariantsGrantTypeSpecification);
    });
  });

  describe('requirements checking', () => {
    test('should return true if all variants are specified', () => {
      // Arrange
      const variants = new Set<GrantTypeVariants>().add('authorization_code');
      const instance = new CreateManyVariantsGrantTypeSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if variants are not specified', () => {
      // Arrange
      const variants = new Set<GrantTypeVariants>();
      const instance = new CreateManyVariantsGrantTypeSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

      // Assert
      expect(result).toBe(false);
    });
  });
});
