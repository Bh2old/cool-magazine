import { LocalhostIPv4HostUriAuthoritySpecification } from '../../hosts-uri';

describe('LocalhostIPv4HostUriAuthoritySpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new LocalhostIPv4HostUriAuthoritySpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        LocalhostIPv4HostUriAuthoritySpecification
      );
    });
  });

  describe('check requirements', () => {
    describe('when candidate host is specified as string type', () => {
      test('should return true if the candidate is equal to the required host', () => {
        // Arrange
        const candidateHost = '127.0.0.1';
        const instance = new LocalhostIPv4HostUriAuthoritySpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the candidate is not equal to the required host', () => {
        // Arrange
        const candidateHost = '192.168.0.1';
        const instance = new LocalhostIPv4HostUriAuthoritySpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(false);
      });
    });

    describe('when required host is specified as object type', () => {
      test('should return true if the candidate is equal to the required host', () => {
        // Arrange
        const candidateHost = { host: '127.0.0.1' };
        const instance = new LocalhostIPv4HostUriAuthoritySpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the candidate is not equal to the required host', () => {
        // Arrange
        const candidateHost = { host: '192.168.0.1' };
        const instance = new LocalhostIPv4HostUriAuthoritySpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(false);
      });
    });
  });
});
