import { CreateValueClientSecretSpecification } from '../create-value-client-secret-specification';

describe('CreateValueClientSecretSpecification', () => {
  describe('instance creation', () => {
    test('should return instance of CreateValueClientSecretSpecification', () => {
      //Arrange

      //Act
      const instance = new CreateValueClientSecretSpecification();

      //Assert
      expect(instance).toBeInstanceOf(CreateValueClientSecretSpecification);
    });
  });

  describe('validation', () => {
    test('should return true if the value satisfies with the specification', () => {
      //Arrange
      let specifiedValue = '';
      const instance = new CreateValueClientSecretSpecification();
      const stringLength = CreateValueClientSecretSpecification.STRING_LENGTH;

      for (let index = 1; index <= stringLength.min; index++) {
        specifiedValue += index;
      }

      //Act
      const result = instance.isSatisfiedBy(specifiedValue);

      //Assert
      expect(result).toBe(true);
    });

    test('should return false if the value does not satisfy with the specification', () => {
      //Arrange
      let specifiedValue = '';
      const instance = new CreateValueClientSecretSpecification();
      const stringLength = CreateValueClientSecretSpecification.STRING_LENGTH;
      const invalidMinStringLength = stringLength.min - 1;

      for (let index = 1; index <= invalidMinStringLength; index++) {
        specifiedValue += index;
      }

      //Act
      const result = instance.isSatisfiedBy(specifiedValue);

      //Assert
      expect(result).toBe(false);
    });
  });
});
