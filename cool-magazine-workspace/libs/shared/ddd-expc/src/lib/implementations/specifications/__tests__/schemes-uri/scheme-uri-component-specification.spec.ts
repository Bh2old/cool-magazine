import { ISchemeUriComponent } from '../../../../abstractions';
import { SchemeUriComponentSpecification } from '../../schemes-uri';

describe('SchemeUriComponentSpecification', () => {
  describe('instance creation', () => {
    test('should return instance if two arguments are specified', () => {
      // Arrange
      const scheme = 'https';
      const isCaseSensitive = true;

      // Act
      const instance = new SchemeUriComponentSpecification(
        scheme,
        isCaseSensitive
      );

      // Assert
      expect(instance).toBeInstanceOf(SchemeUriComponentSpecification);
    });

    test('should return instance if only scheme argument is specified', () => {
      // Arrange
      const scheme = 'https';

      // Act
      const instance = new SchemeUriComponentSpecification(scheme);

      // Assert
      expect(instance).toBeInstanceOf(SchemeUriComponentSpecification);
    });
  });

  describe('check requirements', () => {
    describe('when candidate scheme is specified as string type', () => {
      test('should return true if the candidate is equal to the required case-sensitive scheme', () => {
        // Arrange
        const requiredScheme = 'https';
        const candidateScheme = requiredScheme;
        const isCaseSensitive = true;
        const instance = new SchemeUriComponentSpecification(
          requiredScheme,
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the candidate is equal to the required case-insensitive scheme', () => {
        // Arrange
        const requiredScheme = 'https'.toUpperCase();
        const candidateScheme = requiredScheme.toLowerCase();
        const instance = new SchemeUriComponentSpecification(requiredScheme);

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the candidate is not equal to the required case-sensitive scheme', () => {
        // Arrange
        const requiredScheme = 'http';
        const candidateScheme = requiredScheme;
        const isCaseSensitive = true;
        const instance = new SchemeUriComponentSpecification(
          requiredScheme,
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the candidate is not equal to the required scheme', () => {
        // Arrange
        const requiredScheme = 'http';
        const candidateScheme = requiredScheme + 's';
        const instance = new SchemeUriComponentSpecification(requiredScheme);

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(false);
      });
    });

    describe('when candidate scheme is specified as object type', () => {
      test('should return true if the candidate is equal to the required case-sensitive scheme', () => {
        // Arrange
        const requiredScheme = 'https';
        const candidateScheme: ISchemeUriComponent = { scheme: requiredScheme };
        const isCaseSensitive = true;
        const instance = new SchemeUriComponentSpecification(
          requiredScheme,
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the candidate is equal to the required case-insensitive scheme', () => {
        // Arrange
        const requiredScheme = 'https'.toUpperCase();
        const candidateScheme: ISchemeUriComponent = {
          scheme: requiredScheme.toLowerCase(),
        };
        const instance = new SchemeUriComponentSpecification(requiredScheme);

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the candidate is not equal to the required case-sensitive scheme', () => {
        // Arrange
        const requiredScheme = 'http';
        const candidateScheme: ISchemeUriComponent = {
          scheme: requiredScheme.toUpperCase(),
        };
        const isCaseSensitive = true;
        const instance = new SchemeUriComponentSpecification(
          requiredScheme,
          isCaseSensitive
        );

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if the candidate is not equal to the required scheme', () => {
        // Arrange
        const requiredScheme = 'http';
        const candidateScheme: ISchemeUriComponent = {
          scheme: requiredScheme + 's',
        };
        const instance = new SchemeUriComponentSpecification(requiredScheme);

        // Act
        const result = instance.isSatisfiedBy(candidateScheme);

        // Assert
        expect(result).toBe(false);
      });
    });
  });
});
