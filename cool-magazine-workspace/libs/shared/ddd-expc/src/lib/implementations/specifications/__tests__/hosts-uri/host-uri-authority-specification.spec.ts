import { HostUriAuthoritySpecification } from '../../hosts-uri';

describe('HostUriAuthoritySpecification', () => {
  describe('instance creation', () => {
    test('should return instance if two arguments are specified', () => {
      // Arrange
      const host = 'domain.com';
      const isCaseSensitive = true;

      // Act
      const instance = new HostUriAuthoritySpecification(host, isCaseSensitive);

      // Assert
      expect(instance).toBeInstanceOf(HostUriAuthoritySpecification);
    });

    test('should return instance if only host argument is specified', () => {
      // Arrange
      const host = 'domain.com';

      // Act
      const instance = new HostUriAuthoritySpecification(host);

      // Assert
      expect(instance).toBeInstanceOf(HostUriAuthoritySpecification);
    });
  });

  describe('check requirements', () => {
    describe('when candidate host is specified as string type', () => {
      test('should return true if the candidate is equal to the the required case-sensitive host', () => {
        // Arrange
        const requiredHost = 'domain.COM';
        const candidateHost = requiredHost;
        const isCaseSensitive = true;
        const instance = new HostUriAuthoritySpecification(
          requiredHost,
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the candidate is equal to the required case-insensitive host', () => {
        // Arrange
        const requiredHost = 'domain.com';
        const candidateHost = requiredHost.toUpperCase();
        const instance = new HostUriAuthoritySpecification(requiredHost);

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the candidate is not equal to the required host', () => {
        // Arrange
        const requiredHost = '192.168.0.1';
        const candidateHost = '127.0.0.1';
        const instance = new HostUriAuthoritySpecification(requiredHost);

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if the candidate is not equal to the required case-sensitive host', () => {
        // Arrange
        const requiredHost = 'domain.com';
        const candidateHost = requiredHost.toUpperCase();
        const isCaseSensitive = true;
        const instance = new HostUriAuthoritySpecification(
          requiredHost,
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(false);
      });
    });

    describe('when required host is specified as object type', () => {
      test('should return true if the candidate is equal to the required case-sensitive host', () => {
        // Arrange
        const requiredHost = 'domain.COM';
        const candidateHost = { host: requiredHost };
        const isCaseSensitive = true;
        const instance = new HostUriAuthoritySpecification(
          requiredHost,
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the candidate is equal to the required case-insensitive host', () => {
        // Arrange
        const requiredHost = 'domain.com';
        const candidateHost = { host: requiredHost.toUpperCase() };

        const instance = new HostUriAuthoritySpecification(requiredHost);

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the candidate is not equal to the required host', () => {
        // Arrange
        const requiredHost = 'domain.com';
        const candidateHost = { host: '192.168.0.1' };
        const instance = new HostUriAuthoritySpecification(requiredHost);

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if the candidate is not equal to the required case-sensitive host', () => {
        // Arrange
        const requiredHost = 'domain.com';
        const candidateHost = { host: requiredHost.toUpperCase() };
        const isCaseSensitive = true;
        const instance = new HostUriAuthoritySpecification(
          requiredHost,
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(false);
      });
    });
  });
});
