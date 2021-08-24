import { IValidationRulesCheckingResult } from '@bh2old/ddd-expc';
import { GrantTypeVariants } from '../../../../grant-type';
import { ResponseTypeVariants } from '../../../../response-type';
import {
  GrantTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample,
  RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample,
  ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample,
  ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecificationCandidatesExample,
} from '../../../specifications';
import { ClientMetadataCreateValuesValidationRulesChecker } from '../client-metadata-create-values-validation-rules-checker';

describe('GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new ClientMetadataCreateValuesValidationRulesChecker();

      // Assert
      expect(instance).toBeInstanceOf(
        ClientMetadataCreateValuesValidationRulesChecker
      );
    });
  });

  describe('checking', () => {
    describe('redirectUris property', () => {
      describe('valid variants', () => {
        test('should return true for all variants', () => {
          // Arrange
          const instance =
            new ClientMetadataCreateValuesValidationRulesChecker();
          const variants =
            new RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
              .valid;
          const expected: IValidationRulesCheckingResult[] = [];

          const getResult = () => {
            const actual: IValidationRulesCheckingResult[] = [];
            for (const redirectUris of variants) {
              expected.push({
                verifiableName: 'ClientMetadataCreateValues',
                isValid: true,
                errors: [],
              });

              const { verifiableName, isValid, errors } = instance.check({
                redirectUris: redirectUris,
              });

              actual.push({
                verifiableName,
                isValid,
                errors,
              });
            }
            return actual;
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
            new ClientMetadataCreateValuesValidationRulesChecker();
          const variants =
            new RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
              .invalid;
          type AssertType = {
            verifiableName: string;
            isValid: boolean;
            errors: number;
          };
          const expected: AssertType[] = [];

          const getResult = () => {
            const actual: AssertType[] = [];
            const expectedErrors = ['invalid redirectUris'];

            for (const redirectUris of variants) {
              expected.push({
                verifiableName: 'ClientMetadataCreateValues',
                isValid: false,
                errors: expectedErrors.length,
              });

              const { verifiableName, isValid, errors } = instance.check({
                redirectUris: redirectUris,
              });

              actual.push({
                verifiableName,
                isValid,
                errors: [...errors].length,
              });
            }
            return actual;
          };

          // Act
          const result = getResult();

          // Assert
          expect(result).toStrictEqual(expected);
        });
      });
    });

    describe('responseTypeVariants property', () => {
      describe('valid variants', () => {
        test('should return true for all variants', () => {
          // Arrange
          const instance =
            new ClientMetadataCreateValuesValidationRulesChecker();
          const variants =
            new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
              .valid;
          const expected: IValidationRulesCheckingResult[] = [];

          const getResult = () => {
            const actual: IValidationRulesCheckingResult[] = [];
            for (const responseTypeVariants of variants) {
              expected.push({
                verifiableName: 'ClientMetadataCreateValues',
                isValid: true,
                errors: [],
              });

              const { verifiableName, isValid, errors } = instance.check({
                redirectUris: new Set<string>().add('http://localhost/'),
                responseTypeVariants,
                grantTypeVariants: new Set<GrantTypeVariants>()
                  .add('authorization_code')
                  .add('implicit'),
              });

              actual.push({
                verifiableName,
                isValid,
                errors,
              });
            }
            return actual;
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
            new ClientMetadataCreateValuesValidationRulesChecker();

          const variants =
            new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
              .invalid;

          type AssertType = {
            verifiableName: string;
            isValid: boolean;
            errors: number;
          };

          const expected: AssertType[] = [];

          const getResult = () => {
            const actual: AssertType[] = [];
            const expectedErrors = ['invalid responseTypeVariants'];

            for (const responseTypeVariants of variants) {
              expected.push({
                verifiableName: 'ClientMetadataCreateValues',
                isValid: false,
                errors: expectedErrors.length,
              });

              const { verifiableName, isValid, errors } = instance.check({
                redirectUris: new Set<string>().add('http://localhost/'),
                responseTypeVariants,
                grantTypeVariants: new Set<GrantTypeVariants>()
                  .add('authorization_code')
                  .add('implicit'),
              });

              actual.push({
                verifiableName,
                isValid,
                errors: [...errors].length,
              });
            }
            return actual;
          };

          // Act
          const result = getResult();

          // Assert
          expect(result).toStrictEqual(expected);
        });
      });
    });

    describe('grantTypeVariants property', () => {
      describe('valid variants', () => {
        test('should return true for all variants', () => {
          // Arrange
          const instance =
            new ClientMetadataCreateValuesValidationRulesChecker();
          const variants =
            new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
              .valid;
          const expected: IValidationRulesCheckingResult[] = [];

          const getResult = () => {
            const actual: IValidationRulesCheckingResult[] = [];
            for (const grantTypeVariants of variants) {
              expected.push({
                verifiableName: 'ClientMetadataCreateValues',
                isValid: true,
                errors: [],
              });

              const { verifiableName, isValid, errors } = instance.check({
                redirectUris: new Set<string>().add('http://localhost/'),
                responseTypeVariants: new Set<ResponseTypeVariants>().add(
                  'code'
                ),
                grantTypeVariants,
              });

              actual.push({
                verifiableName,
                isValid,
                errors,
              });
            }
            return actual;
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
            new ClientMetadataCreateValuesValidationRulesChecker();
          const variants =
            new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
              .invalid;
          type AssertType = {
            verifiableName: string;
            isValid: boolean;
            errors: number;
          };
          const expected: AssertType[] = [];

          const getResult = () => {
            const actual: AssertType[] = [];
            const expectedErrors = [
              'invalid grantTypeVariants',
              'invalid correspondence',
            ];
            for (const grantTypeVariants of variants) {
              expected.push({
                verifiableName: 'ClientMetadataCreateValues',
                isValid: false,
                errors: expectedErrors.length,
              });

              const { verifiableName, isValid, errors } = instance.check({
                redirectUris: new Set<string>().add('http://localhost/'),
                responseTypeVariants: new Set<ResponseTypeVariants>().add(
                  'code'
                ),
                grantTypeVariants,
              });

              actual.push({
                verifiableName,
                isValid,
                errors: [...errors].length,
              });
            }
            return actual;
          };

          // Act
          const result = getResult();

          // Assert
          expect(result).toStrictEqual(expected);
        });
      });
    });

    describe('response type variants to grant type variants property correspondence', () => {
      describe('valid variants', () => {
        test('should return true for all variants', () => {
          // Arrange
          const instance =
            new ClientMetadataCreateValuesValidationRulesChecker();
          const variants =
            new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecificationCandidatesExample()
              .valid;

          const expected: IValidationRulesCheckingResult[] = [];

          const getResult = () => {
            const actual: IValidationRulesCheckingResult[] = [];
            for (const variant of variants) {
              expected.push({
                verifiableName: 'ClientMetadataCreateValues',
                isValid: true,
                errors: [],
              });

              const { verifiableName, isValid, errors } = instance.check({
                redirectUris: new Set<string>().add('http://localhost/'),
                ...variant,
              });

              actual.push({
                verifiableName,
                isValid,
                errors,
              });
            }
            return actual;
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
            new ClientMetadataCreateValuesValidationRulesChecker();
          const variants =
            new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecificationCandidatesExample()
              .invalid;
          type AssertType = {
            verifiableName: string;
            isValid: boolean;
            errors: number;
          };
          const expected: AssertType[] = [];

          const getResult = () => {
            const actual: AssertType[] = [];
            const expectedErrors = ['invalid correspondence'];

            for (const variant of variants) {
              expected.push({
                verifiableName: 'ClientMetadataCreateValues',
                isValid: false,
                errors: expectedErrors.length,
              });

              const { verifiableName, isValid, errors } = instance.check({
                redirectUris: new Set<string>().add('http://localhost/'),
                ...variant,
              });

              actual.push({
                verifiableName,
                isValid,
                errors: [...errors].length,
              });
            }
            return actual;
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
