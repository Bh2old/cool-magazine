import { ResponseType } from '../response-type.value-object';

describe('ResponseType', () => {
  describe('instance creation', () => {
    test('should return instance of ResponseType', () => {
      // Arrange
      const params = 'ResponseType';

      // Act
      const instance = ResponseType.create(params);

      // Assert
      expect(instance).toBeInstanceOf(ResponseType);
    });
  });
});
