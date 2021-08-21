import { CreateManyVariantsResponseTypeSpecification } from '../create-many-variants-response-type-specification';
import { CreateManyVariantsResponseTypeSpecificationCandidatesExample } from '../create-many-variants-response-type-specification-candidates-example';

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
    describe('valid variants', () => {
      test('should return true for all variants', () => {
        // Arrange
        const instance = new CreateManyVariantsResponseTypeSpecification();
        const variants =
          new CreateManyVariantsResponseTypeSpecificationCandidatesExample()
            .valid;
        const expected = [];
        const getResult = () => {
          const result = [];
          for (const variant of variants) {
            expected.push(true);
            result.push(instance.isSatisfiedBy(variant));
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
        const instance = new CreateManyVariantsResponseTypeSpecification();
        const variants =
          new CreateManyVariantsResponseTypeSpecificationCandidatesExample()
            .invalid;
        const expected = [];
        const getResult = () => {
          const result = [];
          for (const variant of variants) {
            expected.push(false);
            result.push(instance.isSatisfiedBy(variant));
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
