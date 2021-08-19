import { CreateManyVariantsResponseTypeSpecificationInvariantTable } from '../../../../specifications';
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
      const instance = new CreateManyVariantsResponseTypeValidationRule();
      const getResult = () => {
        const variants =
          new CreateManyVariantsResponseTypeSpecificationInvariantTable().getAllValidCandidates();

        for (const variant of variants) {
          if (!instance.validate(variant)) {
            return false;
          }
          return true;
        }
      };

      // Act
      const result = getResult();

      // Assert
      expect(result).toBe(true);
    });

    test('should return false for all invalid variants', () => {
      // Arrange
      const instance = new CreateManyVariantsResponseTypeValidationRule();
      const getResult = () => {
        const variants =
          new CreateManyVariantsResponseTypeSpecificationInvariantTable().getAllInvalidCandidates();

        for (const variant of variants) {
          if (instance.validate(variant)) {
            return false;
          }
          return true;
        }
      };

      // Act
      const result = getResult();

      // Assert
      expect(result).toBe(true);
    });
  });
});
