import { CreateValueClientIdValidationRule } from '../rules';

describe('CreateValueClientIdValidationRule', () => {
  describe('instance creation', () => {
    test('should return instance of CreateValueClientIdValidationRule', () => {
      //Arrange

      //Act
      const instance = new CreateValueClientIdValidationRule();

      //Assert
      expect(instance).toBeInstanceOf(CreateValueClientIdValidationRule);
    });
  });

  describe('validation', () => {
    test('should return true if the value satisfies with the specification', () => {
      //Arrange
      let specifiedValue = '';
      const instance = new CreateValueClientIdValidationRule();
      const stringLength = CreateValueClientIdValidationRule.STRING_LENGTH;

      for (let index = 1; index <= stringLength.min; index++) {
        specifiedValue += index;
      }

      //Act
      const result = instance.validate(specifiedValue);

      //Assert
      expect(result).toBe(true);
    });

    test('should return false if the value does not satisfy with the specification', () => {
      //Arrange
      let specifiedValue = '';
      const instance = new CreateValueClientIdValidationRule();
      const stringLength = CreateValueClientIdValidationRule.STRING_LENGTH;
      const invalidMinStringLength = stringLength.min - 1;

      for (let index = 1; index <= invalidMinStringLength; index++) {
        specifiedValue += index;
      }

      //Act
      const result = instance.validate(specifiedValue);

      //Assert
      expect(result).toBe(false);
    });
  });
});
