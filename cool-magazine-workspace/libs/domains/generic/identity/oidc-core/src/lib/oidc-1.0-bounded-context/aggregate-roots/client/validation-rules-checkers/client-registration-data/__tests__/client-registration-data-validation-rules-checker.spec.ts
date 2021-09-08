import { IValidationRulesCheckingResult } from '@bh2old/ddd-expc';
import {
  CreateValueClientIdValidationRule,
  GrantTypeVariants,
  GrantTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample,
  RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample,
  ResponseTypeVariants,
  ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample,
  ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecificationCandidatesExample,
} from '../../../../../value-objects';
import { IClientRegistrationData } from '../../../models';
import { SecretPropertyClientRegistrationDataSpecification } from '../../../specifications';
import { ClientRegistrationDataValidationRulesChecker } from '../client-registration-data-validation-rules-checker';

describe('ClientRegistrationDataValidationRulesChecker', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new ClientRegistrationDataValidationRulesChecker();

      // Assert
      expect(instance).toBeInstanceOf(
        ClientRegistrationDataValidationRulesChecker
      );
    });
  });

  describe('checking', () => {
    describe('id property', () => {
      describe('valid variants', () => {
        test('should return true if the value satisfies with the specification', () => {
          //Arrange
          const specifiedValue: IClientRegistrationData = {
            id: '',
            metadata: {
              redirectUris: new Set<string>().add('http://localhost'),
              responseTypeVariants: undefined,
              grantTypeVariants: undefined,
            },
          };
          const instance = new ClientRegistrationDataValidationRulesChecker();
          const stringLength = CreateValueClientIdValidationRule.STRING_LENGTH;
          const expected: IValidationRulesCheckingResult = {
            verifiableName: 'ClientRegistrationData',
            isValid: true,
            errors: [],
          };

          for (let index = 1; index <= stringLength.min; index++) {
            specifiedValue.id += index;
          }

          //Act
          const { verifiableName, isValid, errors } =
            instance.check(specifiedValue);
          const actual: IValidationRulesCheckingResult = {
            verifiableName,
            isValid,
            errors,
          };

          //Assert
          expect(actual).toStrictEqual(expected);
        });
      });
      describe('invalid variants', () => {
        test('should return false if the value does not satisfy with the specification', () => {
          //Arrange
          const specifiedValue: IClientRegistrationData = {
            id: '',
            metadata: {
              redirectUris: new Set<string>().add('http://localhost'),
              responseTypeVariants: undefined,
              grantTypeVariants: undefined,
            },
          };
          type AssertType = {
            verifiableName: string;
            isValid: boolean;
            errors: number;
          };
          const instance = new ClientRegistrationDataValidationRulesChecker();
          const stringLength = CreateValueClientIdValidationRule.STRING_LENGTH;
          const invalidMinStringLength = stringLength.min - 1;
          const expectedErrors = ['invalid length'];
          const expected: AssertType = {
            verifiableName: 'ClientRegistrationData',
            isValid: false,
            errors: expectedErrors.length,
          };
          for (let index = 1; index <= invalidMinStringLength; index++) {
            specifiedValue.id += index;
          }

          //Act
          const { verifiableName, isValid, errors } =
            instance.check(specifiedValue);
          const actual: AssertType = {
            verifiableName,
            isValid,
            errors: [...errors].length,
          };

          //Assert
          expect(actual).toStrictEqual(expected);
        });
      });
    });

    describe('secret property', () => {
      describe('valid variants', () => {
        test('should return true if value is undefined', () => {
          //Arrange
          const specifiedValue: IClientRegistrationData = {
            id: '123456',
            metadata: {
              redirectUris: new Set<string>().add('http://localhost'),
              responseTypeVariants: undefined,
              grantTypeVariants: undefined,
            },
          };
          const expected: IValidationRulesCheckingResult = {
            verifiableName: 'ClientRegistrationData',
            isValid: true,
            errors: [],
          };

          const instance = new ClientRegistrationDataValidationRulesChecker();

          //Act
          const { verifiableName, isValid, errors } =
            instance.check(specifiedValue);
          const actual: IValidationRulesCheckingResult = {
            verifiableName,
            isValid,
            errors,
          };

          //Assert
          expect(actual).toStrictEqual(expected);
        });

        test('should return true if the defined value satisfies with the specification', () => {
          //Arrange
          const specifiedValue: IClientRegistrationData = {
            id: '123456',
            secret: '',
            metadata: {
              redirectUris: new Set<string>().add('http://localhost'),
              responseTypeVariants: undefined,
              grantTypeVariants: undefined,
            },
          };
          const instance = new ClientRegistrationDataValidationRulesChecker();
          const stringLength =
            SecretPropertyClientRegistrationDataSpecification.STRING_LENGTH;

          const expected: IValidationRulesCheckingResult = {
            verifiableName: 'ClientRegistrationData',
            isValid: true,
            errors: [],
          };

          for (let index = 1; index <= stringLength.min; index++) {
            (specifiedValue.secret as string) += index;
          }

          //Act
          const { verifiableName, isValid, errors } =
            instance.check(specifiedValue);
          const actual: IValidationRulesCheckingResult = {
            verifiableName,
            isValid,
            errors,
          };

          //Assert
          expect(actual).toStrictEqual(expected);
        });
      });
      describe('invalid variants', () => {
        test('should return false if the value does not satisfy with the specification', () => {
          //Arrange
          const specifiedValue: IClientRegistrationData = {
            id: '123456',
            secret: '',
            metadata: {
              redirectUris: new Set<string>().add('http://localhost'),
              responseTypeVariants: undefined,
              grantTypeVariants: undefined,
            },
          };
          const instance = new ClientRegistrationDataValidationRulesChecker();
          const stringLength =
            SecretPropertyClientRegistrationDataSpecification.STRING_LENGTH;
          const invalidMinStringLength = stringLength.min - 1;
          type AssertType = {
            verifiableName: string;
            isValid: boolean;
            errors: number;
          };
          const expectedErrors = ['invalid length'];
          const expected: AssertType = {
            verifiableName: 'ClientRegistrationData',
            isValid: false,
            errors: expectedErrors.length,
          };
          for (let index = 1; index <= invalidMinStringLength; index++) {
            (specifiedValue.secret as string) += index;
          }

          //Act
          const { verifiableName, isValid, errors } =
            instance.check(specifiedValue);
          const actual: AssertType = {
            verifiableName,
            isValid,
            errors: [...errors].length,
          };

          //Assert
          expect(actual).toStrictEqual(expected);
        });
      });
    });

    describe('metadata.redirectUris property', () => {
      describe('valid variants', () => {
        test('should return true for all variants', () => {
          // Arrange
          const instance = new ClientRegistrationDataValidationRulesChecker();
          const variants =
            new RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
              .valid;
          const expected: IValidationRulesCheckingResult[] = [];

          const getResult = () => {
            const actual: IValidationRulesCheckingResult[] = [];
            for (const redirectUris of variants) {
              expected.push({
                verifiableName: 'ClientRegistrationData',
                isValid: true,
                errors: [],
              });

              const { verifiableName, isValid, errors } = instance.check({
                id: '123456',
                metadata: {
                  redirectUris: redirectUris,
                },
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
          const instance = new ClientRegistrationDataValidationRulesChecker();
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
                verifiableName: 'ClientRegistrationData',
                isValid: false,
                errors: expectedErrors.length,
              });

              const { verifiableName, isValid, errors } = instance.check({
                id: '123456',
                metadata: {
                  redirectUris: redirectUris,
                },
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

    describe('metadata.responseTypeVariants property', () => {
      describe('valid variants', () => {
        test('should return true for all variants', () => {
          // Arrange
          const instance = new ClientRegistrationDataValidationRulesChecker();
          const variants =
            new ResponseTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
              .valid;
          const expected: IValidationRulesCheckingResult[] = [];

          const getResult = () => {
            const actual: IValidationRulesCheckingResult[] = [];
            for (const responseTypeVariants of variants) {
              expected.push({
                verifiableName: 'ClientRegistrationData',
                isValid: true,
                errors: [],
              });

              const { verifiableName, isValid, errors } = instance.check({
                id: '123456',
                metadata: {
                  redirectUris: new Set<string>().add('http://localhost/'),
                  responseTypeVariants,
                  grantTypeVariants: new Set<GrantTypeVariants>()
                    .add('authorization_code')
                    .add('implicit'),
                },
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
          const instance = new ClientRegistrationDataValidationRulesChecker();

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
                verifiableName: 'ClientRegistrationData',
                isValid: false,
                errors: expectedErrors.length,
              });

              const { verifiableName, isValid, errors } = instance.check({
                id: '123456',
                metadata: {
                  redirectUris: new Set<string>().add('http://localhost/'),
                  responseTypeVariants,
                  grantTypeVariants: new Set<GrantTypeVariants>()
                    .add('authorization_code')
                    .add('implicit'),
                },
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

    describe('metadata.grantTypeVariants property', () => {
      describe('valid variants', () => {
        test('should return true for all variants', () => {
          // Arrange
          const instance = new ClientRegistrationDataValidationRulesChecker();
          const variants =
            new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
              .valid;
          const expected: IValidationRulesCheckingResult[] = [];

          const getResult = () => {
            const actual: IValidationRulesCheckingResult[] = [];
            for (const grantTypeVariants of variants) {
              expected.push({
                verifiableName: 'ClientRegistrationData',
                isValid: true,
                errors: [],
              });

              const { verifiableName, isValid, errors } = instance.check({
                id: '123456',
                metadata: {
                  redirectUris: new Set<string>().add('http://localhost/'),
                  responseTypeVariants: new Set<ResponseTypeVariants>().add(
                    'code'
                  ),
                  grantTypeVariants,
                },
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
          const instance = new ClientRegistrationDataValidationRulesChecker();
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
                verifiableName: 'ClientRegistrationData',
                isValid: false,
                errors: expectedErrors.length,
              });

              const { verifiableName, isValid, errors } = instance.check({
                id: '123456',
                metadata: {
                  redirectUris: new Set<string>().add('http://localhost/'),
                  responseTypeVariants: new Set<ResponseTypeVariants>().add(
                    'code'
                  ),
                  grantTypeVariants,
                },
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

    describe('metadata.responseTypeVariants to metadata.grantTypeVariants properties correspondence', () => {
      describe('valid variants', () => {
        test('should return true for all variants', () => {
          // Arrange
          const instance = new ClientRegistrationDataValidationRulesChecker();
          const variants =
            new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecificationCandidatesExample()
              .valid;

          const expected: IValidationRulesCheckingResult[] = [];

          const getResult = () => {
            const actual: IValidationRulesCheckingResult[] = [];
            for (const variant of variants) {
              expected.push({
                verifiableName: 'ClientRegistrationData',
                isValid: true,
                errors: [],
              });

              const { verifiableName, isValid, errors } = instance.check({
                id: '123456',
                metadata: {
                  redirectUris: new Set<string>().add('http://localhost/'),
                  ...variant,
                },
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
          const instance = new ClientRegistrationDataValidationRulesChecker();
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
                verifiableName: 'ClientRegistrationData',
                isValid: false,
                errors: expectedErrors.length,
              });

              const { verifiableName, isValid, errors } = instance.check({
                id: '123456',
                metadata: {
                  redirectUris: new Set<string>().add('http://localhost/'),
                  ...variant,
                },
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
