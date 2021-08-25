import { GrantTypeVariants } from '../../../../../grant-type';
import { ResponseTypeVariants } from '../../../../../response-type';
import { IClientMetadataCreateValues } from '../../../../models';
import {
  GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification,
  GrantTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample,
} from '../../../../specifications';

describe('GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification
      );
    });
  });

  describe('requirements checking', () => {
    test('should return false if grant type variants are empty collection', () => {
      // Arrange
      const variants: IClientMetadataCreateValues = {
        redirectUris: new Set<string>(),
        grantTypeVariants: new Set<GrantTypeVariants>(),
      };

      const instance =
        new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

      // Assert
      expect(result).toBe(false);
    });

    describe('requirements checking', () => {
      describe('valid variants', () => {
        test('should return true for all variants', () => {
          // Arrange
          const instance =
            new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();
          const variants =
            new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
              .valid;
          const expected: boolean[] = [];
          const getResult = () => {
            const result = [];
            for (const grantTypeVariants of variants) {
              expected.push(true);
              result.push(
                instance.isSatisfiedBy({
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
            new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();
          const variants =
            new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
              .invalid;
          const expected: boolean[] = [];
          const getResult = () => {
            const result = [];
            for (const grantTypeVariants of variants) {
              expected.push(false);
              result.push(
                instance.isSatisfiedBy({
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
});
