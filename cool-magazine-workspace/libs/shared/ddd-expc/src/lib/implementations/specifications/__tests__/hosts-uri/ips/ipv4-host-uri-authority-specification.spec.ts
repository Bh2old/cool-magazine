import { IPV4HostUriAuthoritySpecification } from '../../../hosts-uri';

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
    test('should return true if the candidate is equal to the required host', () => {
      // Arrange
      const candidateHost = '127.0.0.1';
      const instance = new IPV4HostUriAuthoritySpecification();

      // Act
      const result = instance.isSatisfiedBy(candidateHost);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if the candidate is not equal to the required host', () => {
      // Arrange
      const candidateHost = 'dom.dom.dom.ain';
      const instance = new IPV4HostUriAuthoritySpecification();

      // Act
      const result = instance.isSatisfiedBy(candidateHost);

      // Assert
      expect(result).toBe(false);
    });
  });
});
