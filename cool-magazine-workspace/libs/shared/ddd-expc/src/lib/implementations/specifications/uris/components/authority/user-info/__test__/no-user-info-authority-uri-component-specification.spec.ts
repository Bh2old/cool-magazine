import { NoUserInfoAuthorityUriComponentSpecification } from '../no-user-info-authority-uri-component-specification';

describe('NoUserInfoAuthorityUriComponentSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new NoUserInfoAuthorityUriComponentSpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        NoUserInfoAuthorityUriComponentSpecification
      );
    });
  });

  describe('check of requirements', () => {
    describe('when candidate user-info is specified as string type', () => {
      test('should return true if user-info is not specified', () => {
        // Arrange
        const authority = '';
        const instance = new NoUserInfoAuthorityUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(authority);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if user-info is specified', () => {
        // Arrange
        const authority = 'user:pass';
        const instance = new NoUserInfoAuthorityUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(authority);

        // Assert
        expect(result).toBe(false);
      });
    });
  });

  describe('when candidate user-info is specified as object type', () => {
    test('should return true if user-info is not specified', () => {
      // Arrange
      const authority = { userInfo: undefined };
      const instance = new NoUserInfoAuthorityUriComponentSpecification();

      // Act
      const result = instance.isSatisfiedBy(authority);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if user-info is specified', () => {
      // Arrange
      const authority = { userInfo: 'user:pass' };
      const instance = new NoUserInfoAuthorityUriComponentSpecification();

      // Act
      const result = instance.isSatisfiedBy(authority);

      // Assert
      expect(result).toBe(false);
    });
  });
});
