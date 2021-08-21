import { CreateManyVariantsGrantTypeValidationRule } from '../create-many-variants-grant-type-validation-rule';
import { CreateManyVariantsGrantTypeSpecificationCandidatesExample } from '../../../../specifications';

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
    describe('valid variants', () => {
      test('should return true for all variants', () => {
        // Arrange
        const instance = new CreateManyVariantsGrantTypeValidationRule();
        const variants =
          new CreateManyVariantsGrantTypeSpecificationCandidatesExample().valid;
        const expected = [];
        const getResult = () => {
          const result = [];
          for (const variant of variants) {
            expected.push(true);
            result.push(instance.validate(variant));
          }

          return result;
        };

        // Act
        const result = getResult();

        // Assert
        expect(result).toStrictEqual(expected);
      });
    });

    describe('invalid variants', () => {
      test('should return false for all variants', () => {
        // Arrange
        const instance = new CreateManyVariantsGrantTypeValidationRule();
        const variants =
          new CreateManyVariantsGrantTypeSpecificationCandidatesExample()
            .invalid;
        const expected = [];
        const getResult = () => {
          const result = [];
          for (const variant of variants) {
            expected.push(false);
            result.push(instance.validate(variant));
          }

          return result;
        };

        // Act
        const result = getResult();

        // Assert
        expect(result).toStrictEqual(expected);
      });
    });
  });
});
