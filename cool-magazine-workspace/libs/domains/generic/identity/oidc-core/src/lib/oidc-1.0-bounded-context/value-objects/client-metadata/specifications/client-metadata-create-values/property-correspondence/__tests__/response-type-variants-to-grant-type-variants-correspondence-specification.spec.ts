import {
  ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification,
  ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecificationCandidatesExample,
} from '../../../../specifications';

describe('ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification
      );
    });
  });

  describe('requirements checking', () => {
    describe('valid variants', () => {
      test('should return true for all variants', () => {
        // Arrange
        const instance =
          new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification();
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
              instance.isSatisfiedBy({
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
          new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification();
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
              instance.isSatisfiedBy({
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
