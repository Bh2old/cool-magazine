import { IPv4HostAuthorityUriComponentSpecification } from '../ipv4-host-authority-uri-component-specification';

describe('IPv4HostAuthorityUriComponentSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new IPv4HostAuthorityUriComponentSpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        IPv4HostAuthorityUriComponentSpecification
      );
    });
  });
  describe('check requirements', () => {
    test('should return true if candidate matches ipv4', () => {
      // Arrange
      const candidateHost = '127.0.0.1';
      const instance = new IPv4HostAuthorityUriComponentSpecification();

      // Act
      const result = instance.isSatisfiedBy(candidateHost);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if candidate does not match ipv4', () => {
      // Arrange
      const candidateHost = '1.2.3.ain';
      const instance = new IPv4HostAuthorityUriComponentSpecification();

      // Act
      const result = instance.isSatisfiedBy(candidateHost);

      // Assert
      expect(result).toBe(false);
    });
  });
});
