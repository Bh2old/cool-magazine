import { SingleRedirectUriVariantSpecificationCandidatesExample } from '../../../specifications';
import { SingleRedirectUriVariantValidationRule } from '../single-redirect-uri-variant-validation-rule';

describe('SingleRedirectUriVariantValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new SingleRedirectUriVariantValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(SingleRedirectUriVariantValidationRule);
    });
  });

  describe('validation', () => {
    describe('valid uris', () => {
      test('should return true for all uri', () => {
        // Arrange
        const instance = new SingleRedirectUriVariantValidationRule();
        const uris =
          new SingleRedirectUriVariantSpecificationCandidatesExample().valid;
        const getResult = () => {
          for (const uri of uris) {
            if (!instance.validate(uri)) {
              return false;
            }
          }

          return true;
        };

        // Act
        const result = getResult();

        // Assert
        expect(result).toBe(true);
      });
    });

    describe('invalid uris', () => {
      test('should return false for all uri', () => {
        // Arrange
        const instance = new SingleRedirectUriVariantValidationRule();
        const uris =
          new SingleRedirectUriVariantSpecificationCandidatesExample().invalid;
        const getResult = () => {
          for (const uri of uris) {
            if (instance.validate(uri)) {
              return false;
            }
          }

          return true;
        };

        // Act
        const result = getResult();

        // Assert
        expect(result).toBe(true);
      });
    });
  });
});
