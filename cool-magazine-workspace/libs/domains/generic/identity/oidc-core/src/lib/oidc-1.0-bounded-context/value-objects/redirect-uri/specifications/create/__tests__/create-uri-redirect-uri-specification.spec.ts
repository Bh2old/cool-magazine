import { CreateUriRedirectUriSpecificationCandidatesExample } from '../create-uri-redirect-uri-specification-candidates-example';
import { CreateUriRedirectUriSpecification } from '../../../specifications';

describe('CreateUriRedirectUriSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new CreateUriRedirectUriSpecification();

      // Assert
      expect(instance).toBeInstanceOf(CreateUriRedirectUriSpecification);
    });
  });

  describe('requirements checking', () => {
    describe('valid uris', () => {
      test('should return true for all uri', () => {
        // Arrange
        const instance = new CreateUriRedirectUriSpecification();
        const uris = new CreateUriRedirectUriSpecificationCandidatesExample()
          .valid;
        const expected = [];
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
        const instance = new CreateUriRedirectUriSpecification();
        const uris = new CreateUriRedirectUriSpecificationCandidatesExample()
          .invalid;
        const expected = [];
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
