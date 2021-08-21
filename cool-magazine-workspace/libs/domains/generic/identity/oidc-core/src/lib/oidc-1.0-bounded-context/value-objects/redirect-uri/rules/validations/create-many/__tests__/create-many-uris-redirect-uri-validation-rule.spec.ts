import { CreateManyUrisRedirectUriSpecificationCandidatesExample } from '../../../../specifications';
import { CreateManyUrisRedirectUriValidationRule } from '../create-many-uris-redirect-uri-validation-rule';

describe('CreateManyUrisRedirectUriValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new CreateManyUrisRedirectUriValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(CreateManyUrisRedirectUriValidationRule);
    });
  });

  describe('validation', () => {
    describe('valid uris', () => {
      test('should return true for all uri', () => {
        // Arrange
        const instance = new CreateManyUrisRedirectUriValidationRule();
        const uris =
          new CreateManyUrisRedirectUriSpecificationCandidatesExample().valid;
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
        const instance = new CreateManyUrisRedirectUriValidationRule();
        const uris =
          new CreateManyUrisRedirectUriSpecificationCandidatesExample().invalid;
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
