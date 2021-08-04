import { IPV4HostUriAuthoritySpecification } from '../ipv4-host-uri-authority-specification';

describe('IPV4HostUriAuthoritySpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new IPV4HostUriAuthoritySpecification();

      // Assert
      expect(instance).toBeInstanceOf(IPV4HostUriAuthoritySpecification);
    });
  });
  describe('check requirements', () => {
    test('should return true if candidate matches ipv4', () => {
      // Arrange
      const candidateHost = '127.0.0.1';
      const instance = new IPV4HostUriAuthoritySpecification();

      // Act
      const result = instance.isSatisfiedBy(candidateHost);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if candidate does not match ipv4', () => {
      // Arrange
      const candidateHost = '1.2.3.ain';
      const instance = new IPV4HostUriAuthoritySpecification();

      // Act
      const result = instance.isSatisfiedBy(candidateHost);

      // Assert
      expect(result).toBe(false);
    });
  });
});
