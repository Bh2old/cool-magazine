import { CreateUriRedirectUriSpecificationCandidatesExample } from '../../../../specifications';
import { CreateUriRedirectUriValidationRule } from '../create-uri-redirect-uri-validation-rule';

describe('CreateUriRedirectUriValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new CreateUriRedirectUriValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(CreateUriRedirectUriValidationRule);
    });
  });

  describe('validation', () => {
    describe('valid uris', () => {
      test('should return true for all uri', () => {
        // Arrange
        const instance = new CreateUriRedirectUriValidationRule();
        const uris =
          new CreateUriRedirectUriSpecificationCandidatesExample().valid;
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
        const instance = new CreateUriRedirectUriValidationRule();
        const uris =
          new CreateUriRedirectUriSpecificationCandidatesExample().invalid;
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
