import { HttpSchemeUriComponentSpecification } from '../http-scheme-uri-component-specification';

describe('HttpSchemeUriComponentSpecification', () => {
  describe('instance creation', () => {
    test('should return instance without arguments', () => {
      // Arrange
      // Act
      const instance = new HttpSchemeUriComponentSpecification();

      // Assert
      expect(instance).toBeInstanceOf(HttpSchemeUriComponentSpecification);
    });

    test('should return instance if argument is specified', () => {
      // Arrange
      const isCaseSensitive = true;

      // Act
      const instance = new HttpSchemeUriComponentSpecification(isCaseSensitive);

      // Assert
      expect(instance).toBeInstanceOf(HttpSchemeUriComponentSpecification);
    });
  });

  describe('check requirements', () => {
    describe('when required scheme is specified as string type', () => {
      test('should return true if the candidate is equal to the required case-sensitive scheme', () => {
        // Arrange
        const candidateScheme = 'http';
        const isCaseSensitive = true;
        const instance = new HttpSchemeUriComponentSpecification(
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the candidate is equal to the required case-insensitive scheme', () => {
        // Arrange
        const candidateScheme = 'HTTP';
        const instance = new HttpSchemeUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the candidate is not equal to the required case-sensitive scheme', () => {
        // Arrange
        const candidateScheme = 'HTTP';
        const isCaseSensitive = true;
        const instance = new HttpSchemeUriComponentSpecification(
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if the candidate is not equal to the required scheme', () => {
        // Arrange
        const candidateScheme = 'https';
        const instance = new HttpSchemeUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(false);
      });
    });

    describe('when required scheme is specified as object type', () => {
      test('should return true if the candidate is equal to the required case-sensitive scheme', () => {
        // Arrange
        const candidateScheme = { scheme: 'http' };
        const instance = new HttpSchemeUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the candidate is equal to the required case-insensitive scheme', () => {
        // Arrange
        const candidateScheme = { scheme: 'HTTP' };
        const instance = new HttpSchemeUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the candidate is not equal to the required case-sensitive scheme', () => {
        // Arrange
        const candidateScheme = { scheme: 'HTTP' };
        const isCaseSensitive = true;
        const instance = new HttpSchemeUriComponentSpecification(
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if the candidate is not equal to the required scheme', () => {
        // Arrange
        const candidateScheme = { scheme: 'https' };
        const instance = new HttpSchemeUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(false);
      });
    });
  });
});
