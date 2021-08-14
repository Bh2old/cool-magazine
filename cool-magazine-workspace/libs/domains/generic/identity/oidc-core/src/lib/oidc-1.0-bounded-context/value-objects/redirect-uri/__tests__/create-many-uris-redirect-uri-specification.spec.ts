import { CreateManyUrisRedirectUriSpecification } from '../specifications';

describe('CreateManyUrisRedirectUriSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new CreateManyUrisRedirectUriSpecification();

      // Assert
      expect(instance).toBeInstanceOf(CreateManyUrisRedirectUriSpecification);
    });
  });

  describe('requirements checking', () => {
    test('should return true if all uris are valid', () => {
      // Arrange
      const uris = new Set<string>()
        .add('http://localhost:1234/path')
        .add('http://127.0.0.1:1234/path')
        .add('https://domain.dom/path');
      const instance = new CreateManyUrisRedirectUriSpecification();

      // Act
      const result = instance.isSatisfiedBy(uris);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if at least one not localhost uri does not contain https scheme', () => {
      // Arrange
      const uris = new Set<string>()
        .add('http://localhost:1234/path')
        .add('https://domain.dom/path')
        .add('http://domain.dom/path');
      const instance = new CreateManyUrisRedirectUriSpecification();

      // Act
      const result = instance.isSatisfiedBy(uris);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if at least one not localhost uri contains ipv4 host', () => {
      // Arrange
      const uris = new Set<string>()
        .add('https://domain.dom/path')
        .add('http://127.0.0.1:1234/path')
        .add('https://123.5.6.7:1234/path');
      const instance = new CreateManyUrisRedirectUriSpecification();

      // Act
      const result = instance.isSatisfiedBy(uris);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if at least one not localhost uri contains ipv6 host', () => {
      // Arrange
      const uris = new Set<string>()
        .add('https://domain.dom/path')
        .add('http://127.0.0.1:1234/path')
        .add('https://[1:2:3:4:5:6:7:8]/path');
      const instance = new CreateManyUrisRedirectUriSpecification();

      // Act
      const result = instance.isSatisfiedBy(uris);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if at least one uri is not absolute', () => {
      // Arrange
      const uris = new Set<string>()
        .add('https://domain.dom/path')
        .add('domain.com/path');
      const instance = new CreateManyUrisRedirectUriSpecification();

      // Act
      const result = instance.isSatisfiedBy(uris);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if at least one uri contains traversal path', () => {
      // Arrange
      const uris = new Set<string>()
        .add('https://domain.dom/path')
        .add('https://domain.com/../file.png');
      const instance = new CreateManyUrisRedirectUriSpecification();

      // Act
      const result = instance.isSatisfiedBy(uris);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if at least one uri contains authority user info', () => {
      // Arrange
      const uris = new Set<string>()
        .add('https://domain.dom/path')
        .add('https://log:pas@domain.com');
      const instance = new CreateManyUrisRedirectUriSpecification();

      // Act
      const result = instance.isSatisfiedBy(uris);

      // Assert
      expect(result).toBe(false);
    });
  });
});
