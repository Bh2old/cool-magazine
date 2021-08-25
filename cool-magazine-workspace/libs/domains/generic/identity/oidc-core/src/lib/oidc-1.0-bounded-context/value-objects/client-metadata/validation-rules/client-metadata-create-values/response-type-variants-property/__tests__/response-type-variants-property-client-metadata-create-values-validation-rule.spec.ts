import { ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample } from '../../../../specifications';
import { ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule } from '../response-type-variants-property-client-metadata-create-values-validation-rule';

describe('ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(
        ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule
      );
    });
  });

  describe('requirements checking', () => {
    describe('valid variants', () => {
      test('should return true for all variants', () => {
        // Arrange
        const instance =
          new ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule();
        const variants =
          new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
            .valid;
        const expected: boolean[] = [];
        const getResult = () => {
          const result = [];
          for (const responseTypeVariants of variants) {
            expected.push(true);
            result.push(
              instance.validate({
                redirectUris: new Set(),
                responseTypeVariants,
              })
            );
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
        const instance =
          new ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule();
        const variants =
          new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
            .invalid;
        const expected: boolean[] = [];
        const getResult = () => {
          const result = [];
          for (const responseTypeVariants of variants) {
            expected.push(false);
            result.push(
              instance.validate({
                redirectUris: new Set(),
                responseTypeVariants,
              })
            );
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
