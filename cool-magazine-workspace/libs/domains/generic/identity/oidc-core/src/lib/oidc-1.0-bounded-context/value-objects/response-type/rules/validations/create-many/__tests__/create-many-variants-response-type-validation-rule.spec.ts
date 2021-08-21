import { CreateManyVariantsResponseTypeSpecificationCandidatesExample } from '../../../../specifications';
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
    describe('valid variants', () => {
      test('should return true for all variants', () => {
        // Arrange
        const instance = new CreateManyVariantsResponseTypeValidationRule();
        const variants =
          new CreateManyVariantsResponseTypeSpecificationCandidatesExample()
            .valid;
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
        const instance = new CreateManyVariantsResponseTypeValidationRule();
        const variants =
          new CreateManyVariantsResponseTypeSpecificationCandidatesExample()
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
