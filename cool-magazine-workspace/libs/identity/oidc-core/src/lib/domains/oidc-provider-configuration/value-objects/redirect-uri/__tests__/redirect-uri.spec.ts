import { RedirectUri } from '../redirect-uri.value-object';

describe('RedirectUri', () => {
  describe('instance creation', () => {
    test('should return instance of RedirectUri', () => {
      // Arrange
      const params = 'RedirectUri';

      // Act
      const instance = RedirectUri.create(params);

      // Assert
      expect(instance).toBeInstanceOf(RedirectUri);
    });
  });
});
