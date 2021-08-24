import { ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecificationCandidatesExample } from '../../../../specifications';
import { ResponseTypeVariantsToGrantTypeVariantsCorrespondenceValidationRule } from '../response-type-variants-to-grant-type-variants-correspondence-validation-rule';

describe('ResponseTypeVariantsToGrantTypeVariantsCorrespondenceValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceValidationRule();

      // Assert
      expect(instance).toBeInstanceOf(
        ResponseTypeVariantsToGrantTypeVariantsCorrespondenceValidationRule
      );
    });
  });

  describe('requirements checking', () => {
    describe('valid variants', () => {
      test('should return true for all variants', () => {
        // Arrange
        const instance =
          new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceValidationRule();
        const correspondenceVariants =
          new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecificationCandidatesExample()
            .valid;

        const expected = [];
        const getResult = () => {
          const result = [];
          for (const {
            responseTypeVariants,
            grantTypeVariants,
          } of correspondenceVariants) {
            expected.push(true);
            result.push(
              instance.validate({
                redirectUris: new Set(),
                responseTypeVariants,
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
        // Arrange
        const instance =
          new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceValidationRule();
        const correspondenceVariants =
          new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecificationCandidatesExample()
            .invalid;

        const expected = [];
        const getResult = () => {
          const result = [];
          for (const {
            responseTypeVariants,
            grantTypeVariants,
          } of correspondenceVariants) {
            expected.push(false);
            result.push(
              instance.validate({
                redirectUris: new Set(),
                responseTypeVariants,
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
