import {
  ManyRedirectUriVariantsSpecification,
  ManyRedirectUriVariantsSpecificationCandidatesExample,
} from '../';

describe('CreateManyUrisRedirectUriSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new ManyRedirectUriVariantsSpecification();

      // Assert
      expect(instance).toBeInstanceOf(ManyRedirectUriVariantsSpecification);
    });
  });

  describe('requirements checking', () => {
    describe('valid uris', () => {
      test('should return true for all uri', () => {
        // Arrange
        const instance = new ManyRedirectUriVariantsSpecification();
        const uris =
          new ManyRedirectUriVariantsSpecificationCandidatesExample().valid;
        const expected = [];
        const getResult = () => {
          const result = [];
          for (const uri of uris) {
            expected.push(true);
            result.push(instance.isSatisfiedBy(uri));
          }

          return result;
        };

        // Act
        const result = getResult();

        // Assert
        expect(result).toStrictEqual(expected);
      });
    });

    describe('invalid uris', () => {
      test('should return false for all uri', () => {
        // Arrange
        const instance = new ManyRedirectUriVariantsSpecification();
        const uris =
          new ManyRedirectUriVariantsSpecificationCandidatesExample().invalid;
        const expected = [];
        const getResult = () => {
          const result = [];
          for (const uri of uris) {
            expected.push(false);
            result.push(instance.isSatisfiedBy(uri));
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
