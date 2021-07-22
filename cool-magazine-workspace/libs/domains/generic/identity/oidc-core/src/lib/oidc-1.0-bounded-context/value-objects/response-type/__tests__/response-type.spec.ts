import { ResponseType } from '../response-type.value-object';
import { ResponseTypeVariants } from '../types/response-type-variants.type';

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
      const responseTypeVariants = Object.keys(
        ResponseType.RESPONSE_TYPES_BY_VARIANTS
      ) as ResponseTypeVariants[];

      const responseTypes = Object.values(
        ResponseType.RESPONSE_TYPES_BY_VARIANTS
      );

      // Act
      const responseTypeValues = responseTypeVariants.map(
        (variant) => ResponseType.create(variant).value
      );

      // Assert
      expect(responseTypeValues).toStrictEqual(responseTypes);
    });

    test('should return default not empty value if type is not specified', () => {
      // Arrange
      const responseTypes = Object.values(
        ResponseType.RESPONSE_TYPES_BY_VARIANTS
      );
      // Act
      const defaultResponseTypeValue = ResponseType.createAsDefault().value;

      // Assert
      expect(responseTypes).toContain(defaultResponseTypeValue);
    });
  });
});
