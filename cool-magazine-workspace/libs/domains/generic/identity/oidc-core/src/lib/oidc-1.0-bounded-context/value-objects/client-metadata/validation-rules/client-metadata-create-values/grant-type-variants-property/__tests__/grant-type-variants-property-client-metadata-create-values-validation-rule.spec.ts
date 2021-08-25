import { GrantTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample } from '../../../../specifications';
import { GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule } from '../grant-type-variants-property-client-metadata-create-values-validation-rule';

describe('GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(
        GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule
      );
    });
  });

  describe('validation', () => {
    describe('valid variants', () => {
      test('should return true for all variants', () => {
        // Arrange
        const instance =
          new GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule();
        const variants =
          new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
            .valid;
        const expected: boolean[] = [];
        const getResult = () => {
          const result = [];
          for (const grantTypeVariants of variants) {
            expected.push(true);
            result.push(
              instance.validate({
                redirectUris: new Set(),
                grantTypeVariants,
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
          new GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule();
        const variants =
          new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
            .invalid;
        const expected: boolean[] = [];
        const getResult = () => {
          const result = [];
          for (const grantTypeVariants of variants) {
            expected.push(false);
            result.push(
              instance.validate({
                redirectUris: new Set(),
                grantTypeVariants,
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
