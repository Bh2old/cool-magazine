import { ManyGrantTypeVariantsValidationRule } from '../many-grant-type-variants-validation-rule';
import { CreateManyVariantsGrantTypeSpecificationCandidatesExample } from '../../../specifications';

describe('ManyGrantTypeVariantsValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new ManyGrantTypeVariantsValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(
        ManyGrantTypeVariantsValidationRule
      );
    });
  });

  describe('validation', () => {
    describe('valid variants', () => {
      test('should return true for all variants', () => {
        // Arrange
        const instance = new ManyGrantTypeVariantsValidationRule();
        const variants =
          new CreateManyVariantsGrantTypeSpecificationCandidatesExample().valid;
        const expected: boolean[] = [];
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
        const instance = new ManyGrantTypeVariantsValidationRule();
        const variants =
          new CreateManyVariantsGrantTypeSpecificationCandidatesExample()
            .invalid;
        const expected: boolean[] = [];
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
