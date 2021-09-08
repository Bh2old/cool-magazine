import { IClientRegistrationData } from '../../../models';
import { SecretPropertyClientRegistrationDataSpecification } from '../secret-property-client-registration-data-specification';

describe('SecretPropertyClientRegistrationDataSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      //Arrange

      //Act
      const instance = new SecretPropertyClientRegistrationDataSpecification();

      //Assert
      expect(instance).toBeInstanceOf(
        SecretPropertyClientRegistrationDataSpecification
      );
    });
  });

  describe('requirements check', () => {
    test('should return true if value is undefined', () => {
      //Arrange
      const specifiedValue: IClientRegistrationData = {
        id: '',
        metadata: {
          redirectUris: new Set<string>(),
          responseTypeVariants: undefined,
          grantTypeVariants: undefined,
        },
      };
      const instance = new SecretPropertyClientRegistrationDataSpecification();

      //Act
      const result = instance.isSatisfiedBy(specifiedValue);

      //Assert
      expect(result).toBe(true);
    });

    test('should return true if the defined value satisfies with the specification', () => {
      //Arrange
      const specifiedValue: IClientRegistrationData = {
        id: '',
        secret: '',
        metadata: {
          redirectUris: new Set<string>(),
          responseTypeVariants: undefined,
          grantTypeVariants: undefined,
        },
      };
      const instance = new SecretPropertyClientRegistrationDataSpecification();
      const stringLength =
        SecretPropertyClientRegistrationDataSpecification.STRING_LENGTH;

      for (let index = 1; index <= stringLength.min; index++) {
        (specifiedValue.secret as string) += index;
      }

      //Act
      const result = instance.isSatisfiedBy(specifiedValue);

      //Assert
      expect(result).toBe(true);
    });

    test('should return false if the value does not satisfy with the specification', () => {
      //Arrange
      const specifiedValue: IClientRegistrationData = {
        id: '',
        secret: '',
        metadata: {
          redirectUris: new Set<string>(),
          responseTypeVariants: undefined,
          grantTypeVariants: undefined,
        },
      };
      const instance = new SecretPropertyClientRegistrationDataSpecification();
      const stringLength =
        SecretPropertyClientRegistrationDataSpecification.STRING_LENGTH;
      const invalidMinStringLength = stringLength.min - 1;

      for (let index = 1; index <= invalidMinStringLength; index++) {
        (specifiedValue.secret as string) += index;
      }

      //Act
      const result = instance.isSatisfiedBy(specifiedValue);

      //Assert
      expect(result).toBe(false);
    });
  });
});
