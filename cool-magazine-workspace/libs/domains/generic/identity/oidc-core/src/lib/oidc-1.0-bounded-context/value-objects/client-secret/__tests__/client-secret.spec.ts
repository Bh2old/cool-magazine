import { ClientSecret } from '../client-secret.value-object';

describe('ClientSecret', () => {
  describe('instance creation with specified value', () => {
    test('should return instance of ClientSecret', () => {
      // Arrange
      const params = 'ClientSecret';

      // Act
      const instance = ClientSecret.create(params);

      // Assert
      expect(instance).toBeInstanceOf(ClientSecret);
    });
  });

  describe('instance creation without specified value', () => {
    test('should return instance of ClientSecret', () => {
      // Arrange

      // Act
      const instance = ClientSecret.createAsNotSpecified();

      // Assert
      expect(instance).toBeInstanceOf(ClientSecret);
    });
  });
});
