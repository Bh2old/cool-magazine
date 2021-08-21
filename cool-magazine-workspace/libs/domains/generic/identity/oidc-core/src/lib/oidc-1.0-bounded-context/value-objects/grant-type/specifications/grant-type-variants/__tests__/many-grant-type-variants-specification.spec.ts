import { ManyGrantTypeVariantsSpecification } from '../many-grant-type-variants-specification';
import { CreateManyVariantsGrantTypeSpecificationCandidatesExample } from '../many-grant-type-variants-specification-candidates-example';

describe('ManyGrantTypeVariantsSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new ManyGrantTypeVariantsSpecification();

      // Assert
      expect(instance).toBeInstanceOf(ManyGrantTypeVariantsSpecification);
    });
  });

  describe('requirements checking', () => {
    describe('valid variants', () => {
      test('should return true for all variants', () => {
        // Arrange
        const instance = new ManyGrantTypeVariantsSpecification();
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
        const instance = new ManyGrantTypeVariantsSpecification();
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
