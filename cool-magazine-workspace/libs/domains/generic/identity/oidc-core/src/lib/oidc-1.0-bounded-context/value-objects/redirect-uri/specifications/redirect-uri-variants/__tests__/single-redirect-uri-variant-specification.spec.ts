import { SingleRedirectUriVariantSpecification } from '../single-redirect-uri-variant-specification';
import { SingleRedirectUriVariantSpecificationCandidatesExample } from '../single-redirect-uri-variant-specification-candidates-example';

describe('SingleRedirectUriVariantSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new SingleRedirectUriVariantSpecification();

      // Assert
      expect(instance).toBeInstanceOf(SingleRedirectUriVariantSpecification);
    });
  });

  describe('requirements checking', () => {
    describe('valid uris', () => {
      test('should return true for all uri', () => {
        // Arrange
        const instance = new SingleRedirectUriVariantSpecification();
        const uris =
          new SingleRedirectUriVariantSpecificationCandidatesExample().valid;
        const expected: string[] = [];
        const getResult = () => {
          const result = [];
          for (const uri of uris) {
            expected.push(`${uri} = true`);
            result.push(`${uri} = ${instance.isSatisfiedBy(uri)}`);
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
        const instance = new SingleRedirectUriVariantSpecification();
        const uris =
          new SingleRedirectUriVariantSpecificationCandidatesExample().invalid;
        const expected: string[] = [];
        const getResult = () => {
          const result = [];
          for (const uri of uris) {
            expected.push(`${uri} = false`);
            result.push(`${uri} = ${instance.isSatisfiedBy(uri)}`);
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
