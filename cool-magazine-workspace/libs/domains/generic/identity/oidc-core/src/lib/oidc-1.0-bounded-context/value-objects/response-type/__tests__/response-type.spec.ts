import { ResponseType } from '../response-type.value-object';
import { RESPONSE_TYPE_VARIANTS } from '../constants/response-type-variants';
import { RESPONSE_TYPES } from '../constants/response-types';

describe('ResponseType', () => {
  describe('instance creation', () => {
    test('should return instance of ResponseType with specifying type', () => {
      // Arrange
      const params = 'code';

      // Act
      const instance = ResponseType.create(params);

      // Assert
      expect(instance).toBeInstanceOf(ResponseType);
    });

    test('should return instance of ResponseType without specifying type', () => {
      // Arrange

      // Act
      const instance = ResponseType.createAsDefault();

      // Assert
      expect(instance).toBeInstanceOf(ResponseType);
    });
  });

  describe('getting value', () => {
    test('should return not empty string value if type is specified', () => {
      // Arrange
      // Act
      const responseTypeValues = RESPONSE_TYPE_VARIANTS.map(
        (variant) => ResponseType.create(variant).value
      );

      // Assert
      expect(responseTypeValues).toEqual(expect.arrayContaining([...RESPONSE_TYPES]));
    });

    test('should return default not empty value if type is not specified', () => {
      // Arrange
      // Act
      const defaultResponseTypeValue = ResponseType.createAsDefault().value;

      // Assert
      expect(RESPONSE_TYPES).toContain(defaultResponseTypeValue);
    });
  });
});
