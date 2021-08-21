import { CreateManyVariantsGrantTypeSpecification } from '../create-many-variants-grant-type-specification';
import { CreateManyVariantsGrantTypeSpecificationCandidatesExample } from '../create-many-variants-grant-type-specification-candidates-example';

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
    describe('valid variants', () => {
      test('should return true for all variants', () => {
        // Arrange
        const instance = new CreateManyVariantsGrantTypeSpecification();
        const variants =
          new CreateManyVariantsGrantTypeSpecificationCandidatesExample().valid;
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
        const instance = new CreateManyVariantsGrantTypeSpecification();
        const variants =
          new CreateManyVariantsGrantTypeSpecificationCandidatesExample()
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
