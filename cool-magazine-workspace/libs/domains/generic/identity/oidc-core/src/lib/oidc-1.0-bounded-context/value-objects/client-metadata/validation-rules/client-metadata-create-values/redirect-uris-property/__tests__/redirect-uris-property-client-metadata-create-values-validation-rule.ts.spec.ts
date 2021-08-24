import { RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample } from '../../../../specifications';
import { RedirectUrisPropertyClientMetadataCreateValuesValidationRule } from '../redirect-uris-property-client-metadata-create-values-validation-rule';

describe('RedirectUrisPropertyClientMetadataCreateValuesValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new RedirectUrisPropertyClientMetadataCreateValuesValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(
        RedirectUrisPropertyClientMetadataCreateValuesValidationRule
      );
    });
  });

  describe('validation', () => {
    describe('valid uris', () => {
      test('should return true for all uri', () => {
        // Arrange
        const instance =
          new RedirectUrisPropertyClientMetadataCreateValuesValidationRule();
        const uris =
          new RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
            .valid;
        const expected = [];
        const getResult = () => {
          const result = [];
          for (const redirectUris of uris) {
            expected.push(true);
            result.push(instance.validate({ redirectUris }));
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
        const instance =
          new RedirectUrisPropertyClientMetadataCreateValuesValidationRule();
        const uris =
          new RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
            .invalid;
        const expected = [];
        const getResult = () => {
          const result = [];
          for (const redirectUris of uris) {
            expected.push(false);
            result.push(instance.validate({ redirectUris }));
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
