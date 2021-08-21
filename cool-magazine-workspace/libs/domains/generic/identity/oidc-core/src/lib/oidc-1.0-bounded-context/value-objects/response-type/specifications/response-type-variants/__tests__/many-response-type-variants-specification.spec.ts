import {
  ManyResponseTypeVariantsSpecification,
  ManyResponseTypeVariantsSpecificationCandidatesExample,
} from '..';

describe('ManyResponseTypeVariantsSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new ManyResponseTypeVariantsSpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        ManyResponseTypeVariantsSpecification
      );
    });
  });

  describe('requirements checking', () => {
    describe('valid variants', () => {
      test('should return true for all variants', () => {
        // Arrange
        const instance = new ManyResponseTypeVariantsSpecification();
        const variants =
          new ManyResponseTypeVariantsSpecificationCandidatesExample()
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
        const instance = new ManyResponseTypeVariantsSpecification();
        const variants =
          new ManyResponseTypeVariantsSpecificationCandidatesExample()
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
