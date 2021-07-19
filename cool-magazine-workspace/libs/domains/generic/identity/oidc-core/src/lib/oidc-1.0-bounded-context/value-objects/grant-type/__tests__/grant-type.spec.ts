import { GrantType } from '../grant-type.value-object';

describe('GrantType', () => {
  describe('instance creation', () => {
    test('should return instance of GrantType', () => {
      // Arrange
      const params = 'GrantType';

      // Act
      const instance = GrantType.create(params);

      // Assert
      expect(instance).toBeInstanceOf(GrantType);
    });
  });
});
