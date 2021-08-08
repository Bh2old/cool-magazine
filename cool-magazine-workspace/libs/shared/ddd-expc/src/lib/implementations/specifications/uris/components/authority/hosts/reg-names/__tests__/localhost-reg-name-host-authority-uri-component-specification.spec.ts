import { LocalhostRegNameHostAuthorityUriComponentSpecification } from '../localhost-reg-name-host-authority-uri-component-specification';

describe('LocalhostRegNameHostAuthorityUriComponentSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new LocalhostRegNameHostAuthorityUriComponentSpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        LocalhostRegNameHostAuthorityUriComponentSpecification
      );
    });

    test('should return instance if argument is specified', () => {
      // Arrange
      const isCaseSensitive = true;

      // Act
      const instance =
        new LocalhostRegNameHostAuthorityUriComponentSpecification(
          isCaseSensitive
        );

      // Assert
      expect(instance).toBeInstanceOf(
        LocalhostRegNameHostAuthorityUriComponentSpecification
      );
    });
  });

  describe('check requirements', () => {
    describe('when candidate host is specified as string type', () => {
      test('should return true if the candidate is equal to the required case-sensitive host', () => {
        // Arrange
        const candidateHost = 'localhost';
        const isCaseSensitive = true;
        const instance =
          new LocalhostRegNameHostAuthorityUriComponentSpecification(
            isCaseSensitive
          );

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the candidate is equal to the required case-insensitive host', () => {
        // Arrange
        const candidateHost = 'LOCALHOST';
        const instance =
          new LocalhostRegNameHostAuthorityUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the candidate is not equal to the required case-sensitive host', () => {
        // Arrange
        const candidateHost = 'LOCALHOST';
        const isCaseSensitive = true;
        const instance =
          new LocalhostRegNameHostAuthorityUriComponentSpecification(
            isCaseSensitive
          );

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if the candidate is not equal to the required host', () => {
        // Arrange
        const candidateHost = '127.0.0.1';
        const instance =
          new LocalhostRegNameHostAuthorityUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(false);
      });
    });

    describe('when candidate host is specified as object type', () => {
      test('should return true if the candidate is equal to the required case-sensitive host', () => {
        // Arrange
        const candidateHost = { host: 'localhost' };
        const isCaseSensitive = true;
        const instance =
          new LocalhostRegNameHostAuthorityUriComponentSpecification(
            isCaseSensitive
          );

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the candidate is equal to the required case-insensitive host', () => {
        // Arrange
        const candidateHost = { host: 'LOCALHOST' };
        const instance =
          new LocalhostRegNameHostAuthorityUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the candidate is not equal to the required case-sensitive host', () => {
        // Arrange
        const candidateHost = { host: 'LOCALHOST' };
        const isCaseSensitive = true;
        const instance =
          new LocalhostRegNameHostAuthorityUriComponentSpecification(
            isCaseSensitive
          );

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if the candidate is not equal to the required host', () => {
        // Arrange
        const candidateHost = '127.0.0.1';
        const instance =
          new LocalhostRegNameHostAuthorityUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateHost);

        // Assert
        expect(result).toBe(false);
      });
    });
  });
});
