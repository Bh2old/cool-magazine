import { ManyRedirectUriVariantsSpecificationCandidatesExample } from '../../../specifications';
import { ManyRedirectUriVariantsValidationRule } from '../many-redirect-uri-variants-validation-rule';

describe('ManyRedirectUriVariantsValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new ManyRedirectUriVariantsValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(ManyRedirectUriVariantsValidationRule);
    });
  });

  describe('validation', () => {
    describe('valid uris', () => {
      test('should return true for all uri', () => {
        // Arrange
        const instance = new ManyRedirectUriVariantsValidationRule();
        const uris = new ManyRedirectUriVariantsSpecificationCandidatesExample()
          .valid;
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
        const instance = new ManyRedirectUriVariantsValidationRule();
        const uris = new ManyRedirectUriVariantsSpecificationCandidatesExample()
          .invalid;
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
