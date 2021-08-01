import { HttpsSchemeUriComponentSpecification } from '../https-scheme-uri-component-specification';

describe('HttpsSchemeUriComponentSpecification', () => {
  describe('instance creation', () => {
    test('should return instance without arguments', () => {
      // Arrange
      // Act
      const instance = new HttpsSchemeUriComponentSpecification();

      // Assert
      expect(instance).toBeInstanceOf(HttpsSchemeUriComponentSpecification);
    });

    test('should return instance if argument is specified', () => {
      // Arrange
      const isCaseSensitive = true;

      // Act
      const instance = new HttpsSchemeUriComponentSpecification(
        isCaseSensitive
      );

      // Assert
      expect(instance).toBeInstanceOf(HttpsSchemeUriComponentSpecification);
    });
  });

  describe('check requirements', () => {
    describe('when required scheme is specified as string type', () => {
      test('should return true if the candidate is equal to the required case-sensitive scheme', () => {
        // Arrange
        const candidateScheme = 'https';
        const isCaseSensitive = true;
        const instance = new HttpsSchemeUriComponentSpecification(
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the candidate is equal to the required case-insensitive scheme', () => {
        // Arrange
        const candidateScheme = 'HTTPS';
        const instance = new HttpsSchemeUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the candidate is not equal to the required case-sensitive scheme', () => {
        // Arrange
        const candidateScheme = 'HTTPS';
        const isCaseSensitive = true;
        const instance = new HttpsSchemeUriComponentSpecification(
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if the candidate is not equal to the required scheme', () => {
        // Arrange
        const candidateScheme = 'http';
        const instance = new HttpsSchemeUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(false);
      });
    });

    describe('when required scheme is specified as object type', () => {
      test('should return true if the candidate is equal to the required case-sensitive scheme', () => {
        // Arrange
        const candidateScheme = { scheme: 'https' };
        const instance = new HttpsSchemeUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the candidate is equal to the required case-insensitive scheme', () => {
        // Arrange
        const candidateScheme = { scheme: 'HTTPS' };
        const instance = new HttpsSchemeUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the candidate is not equal to the required case-sensitive scheme', () => {
        // Arrange
        const candidateScheme = { scheme: 'HTTPS' };
        const isCaseSensitive = true;
        const instance = new HttpsSchemeUriComponentSpecification(
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if the candidate is not equal to the required scheme', () => {
        // Arrange
        const candidateScheme = { scheme: 'http' };
        const instance = new HttpsSchemeUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(false);
      });
    });
  });
});
