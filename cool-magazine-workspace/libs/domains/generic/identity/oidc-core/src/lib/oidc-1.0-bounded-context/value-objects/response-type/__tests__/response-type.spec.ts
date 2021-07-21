import { ResponseTypes } from '../enums';
import { ResponseType } from '../response-type.value-object';

describe('ResponseType', () => {
  describe('instance creation', () => {
    test('should return instance of ResponseType with specifying type', () => {
      // Arrange
      const params = ResponseTypes.code;

      // Act
      const instance = ResponseType.create(params);

      // Assert
      expect(instance).toBeInstanceOf(ResponseType);
    });
  });

  describe('getting value', () => {
    test('should return value according to ResponseTypes if type is specified', () => {
      // Arrange
      type ResponseTypesKeys = keyof typeof ResponseTypes;
      const responseTypesKeys: ResponseTypesKeys[] = Object.keys(
        ResponseTypes
      ) as ResponseTypesKeys[];
      const expectedResponseTypesValues = Object.values(ResponseTypes);

      // Act
      const responseTypeValues = responseTypesKeys.map(
        (key) => ResponseType.create(ResponseTypes[key]).value
      );

      // Assert
      expect(responseTypeValues).toStrictEqual(expectedResponseTypesValues);
    });
  });
});
