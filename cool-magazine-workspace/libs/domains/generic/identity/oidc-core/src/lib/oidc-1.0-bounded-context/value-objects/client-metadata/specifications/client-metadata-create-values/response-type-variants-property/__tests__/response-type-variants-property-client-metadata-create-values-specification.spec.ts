import { ResponseTypeVariants } from '../../../../../response-type';
import { IClientMetadataCreateValues } from '../../../../models';
import {
  ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification,
  ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample,
} from '../../../../specifications';

describe('ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification
      );
    });
  });

  describe('requirements checking', () => {
    describe('valid variants', () => {
      test('should return true for all variants', () => {
        // Arrange
        const instance =
          new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification();
        const variants =
          new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
            .valid;
        const expected: boolean[] = [];
        const getResult = () => {
          const result = [];
          for (const responseTypeVariants of variants) {
            expected.push(true);
            result.push(
              instance.isSatisfiedBy({
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
          new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecification();
        const variants =
          new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
            .invalid;
        const expected: boolean[] = [];
        const getResult = () => {
          const result = [];
          for (const responseTypeVariants of variants) {
            expected.push(false);
            result.push(
              instance.isSatisfiedBy({
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
