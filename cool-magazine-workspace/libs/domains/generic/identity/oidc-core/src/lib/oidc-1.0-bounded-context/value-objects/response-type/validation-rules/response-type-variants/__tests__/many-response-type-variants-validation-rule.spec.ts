import { ManyResponseTypeVariantsSpecificationCandidatesExample } from '../../../specifications';
import { ManyResponseTypeVariantsValidationRule } from '../many-response-type-variants-validation-rule';

describe('ManyResponseTypeVariantsValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new ManyResponseTypeVariantsValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(
        ManyResponseTypeVariantsValidationRule
      );
    });
  });

  describe('validation', () => {
    describe('valid variants', () => {
      test('should return true for all variants', () => {
        // Arrange
        const instance = new ManyResponseTypeVariantsValidationRule();
        const variants =
          new ManyResponseTypeVariantsSpecificationCandidatesExample().valid;
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
        const instance = new ManyResponseTypeVariantsValidationRule();
        const variants =
          new ManyResponseTypeVariantsSpecificationCandidatesExample().invalid;
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
