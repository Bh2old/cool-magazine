import { CreateUriRedirectUriSpecification } from '../specifications';

describe('CreateUriRedirectUriSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new CreateUriRedirectUriSpecification();

      // Assert
      expect(instance).toBeInstanceOf(CreateUriRedirectUriSpecification);
    });
  });

  describe('requirements checking', () => {
    describe('if uri is localhost', () => {
      test('should return true if uri is valid and host is localhost', () => {
        // Arrange
        const uri = 'http://localhost:1234/path';
        const instance = new CreateUriRedirectUriSpecification();

        // Act
        const result = instance.isSatisfiedBy(uri);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if uri is valid and host is 127.0.0.1', () => {
        // Arrange
        const uri = 'http://127.0.0.1:1234/path';
        const instance = new CreateUriRedirectUriSpecification();

        // Act
        const result = instance.isSatisfiedBy(uri);

        // Assert
        expect(result).toBe(true);
      });
    });

    describe('if uri is not localhost', () => {
      test('should return true if uri is valid', () => {
        // Arrange
        const uri = 'https://domain.dom/path';
        const instance = new CreateUriRedirectUriSpecification();

        // Act
        const result = instance.isSatisfiedBy(uri);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if uri do not contain https scheme', () => {
        // Arrange
        const uri = 'http://domain.dom/path';
        const instance = new CreateUriRedirectUriSpecification();

        // Act
        const result = instance.isSatisfiedBy(uri);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if uri contains ipv4 host', () => {
        // Arrange
        const uri = 'https://123.5.6.7/path';
        const instance = new CreateUriRedirectUriSpecification();

        // Act
        const result = instance.isSatisfiedBy(uri);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if uri contains ipv6 host', () => {
        // Arrange
        const uri = 'https://[1:2:3:4:5:6:7:8]/path';
        const instance = new CreateUriRedirectUriSpecification();

        // Act
        const result = instance.isSatisfiedBy(uri);

        // Assert
        expect(result).toBe(false);
      });
    });

    describe('common checks for all uri', () => {
      test('should return false if uri is not absolute', () => {
        // Arrange
        const uri = 'domain.com/path';
        const instance = new CreateUriRedirectUriSpecification();

        // Act
        const result = instance.isSatisfiedBy(uri);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if uri contains traversal path', () => {
        // Arrange
        const uri = 'https://domain.com/../file.png';
        const instance = new CreateUriRedirectUriSpecification();

        // Act
        const result = instance.isSatisfiedBy(uri);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if uri contains authority user info', () => {
        // Arrange
        const uri = 'https://log:pas@domain.com';
        const instance = new CreateUriRedirectUriSpecification();

        // Act
        const result = instance.isSatisfiedBy(uri);

        // Assert
        expect(result).toBe(false);
      });
    });
  });
});
