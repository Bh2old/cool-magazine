import { LengthStringSpecification } from '../length-string-specification';

describe('LengthStringSpecification', () => {
  describe('instance creation', () => {
    describe('overload with strict length', () => {
      test('should return instance', () => {
        // Arrange
        const length = 2;

        // Act
        const instance = new LengthStringSpecification(length);

        // Assert
        expect(instance).toBeInstanceOf(LengthStringSpecification);
      });
    });

    describe('overload with only min', () => {
      test('should return instance', () => {
        // Arrange
        const min = 2;

        // Act
        const instance = new LengthStringSpecification({ min });

        // Assert
        expect(instance).toBeInstanceOf(LengthStringSpecification);
      });
    });

    describe('overload with only max', () => {
      test('should return instance', () => {
        // Arrange
        const max = 2;

        // Act
        const instance = new LengthStringSpecification({ max });

        // Assert
        expect(instance).toBeInstanceOf(LengthStringSpecification);
      });
    });

    describe('overload with min and max', () => {
      test('should return instance', () => {
        // Arrange
        const min = 2;
        const max = 4;

        // Act
        const instance = new LengthStringSpecification({ min, max });

        // Assert
        expect(instance).toBeInstanceOf(LengthStringSpecification);
      });
    });
  });

  describe('check requirements', () => {
    describe('with strict length', () => {
      test('should return true if the length of the string is equal to the strict length', () => {
        // Arrange
        const strictLength = 2;
        const specification = new LengthStringSpecification(strictLength);

        let value = '';

        for (let index = 1; index <= strictLength; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the length of the string is less than the strict length', () => {
        // Arrange
        const strictLength = 2;
        const lessThanStrictLength = strictLength - 1;
        const specification = new LengthStringSpecification(strictLength);

        let value = '';

        for (let index = 1; index <= lessThanStrictLength; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if the length of the string is greater than the strict length', () => {
        // Arrange
        const strictLength = 2;
        const greaterMaxLength = strictLength + 1;
        const specification = new LengthStringSpecification(strictLength);

        let value = '';

        for (let index = 1; index <= greaterMaxLength; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(false);
      });
    });

    describe('with only min', () => {
      test('should return true if the length of the string is equal to the minimum length', () => {
        // Arrange
        const min = 2;
        const specification = new LengthStringSpecification({ min });

        let value = '';

        for (let index = 1; index <= min; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the length of the string is greater than the minimum length', () => {
        // Arrange
        const min = 2;
        const greaterThanMinLength = min + 1;
        const specification = new LengthStringSpecification({ min });

        let value = '';

        for (let index = 1; index <= greaterThanMinLength; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the length of the string is less than the minimum length', () => {
        // Arrange
        const min = 2;
        const lessThanMinLength = min - 1;
        const specification = new LengthStringSpecification({ min });

        let value = '';

        for (let index = 1; index <= lessThanMinLength; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(false);
      });
    });

    describe('with only max', () => {
      test('should return true if the length of the string is equal to the maximum length', () => {
        // Arrange
        const max = 2;
        const specification = new LengthStringSpecification({ max });

        let value = '';

        for (let index = 1; index <= max; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the length of the string is less than the maximum length', () => {
        // Arrange
        const max = 2;
        const lessThanMaxLength = max - 1;
        const specification = new LengthStringSpecification({ max });

        let value = '';

        for (let index = 1; index <= lessThanMaxLength; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the length of the string is greater than the maximum length', () => {
        // Arrange
        const max = 2;
        const greaterMaxLength = max + 1;
        const specification = new LengthStringSpecification({ max });

        let value = '';

        for (let index = 1; index <= greaterMaxLength; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(false);
      });
    });

    describe('with min and max', () => {
      test('should return true if the length of the string is equal to the minimum length', () => {
        // Arrange
        const min = 2;
        const max = min * 3;
        const specification = new LengthStringSpecification({ min, max });

        let value = '';

        for (let index = 1; index <= min; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the length of the string is greater than the minimum length and less than the maximum length', () => {
        // Arrange
        const min = 2;
        const max = min * 3;
        const greaterThanMinLength = min + 1;
        const specification = new LengthStringSpecification({ min, max });

        let value = '';

        for (let index = 1; index <= greaterThanMinLength; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the length of the string is equal to the maximum length', () => {
        // Arrange
        const min = 2;
        const max = min * 3;
        const specification = new LengthStringSpecification({ min, max });

        let value = '';

        for (let index = 1; index <= max; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(true);
      });

      test('should return true if the length of the string is equal to the minimum and maximum length', () => {
        // Arrange
        const min = 2;
        const max = min;
        const strictLength = max;

        const specification = new LengthStringSpecification({ min, max });

        let value = '';

        for (let index = 1; index <= strictLength; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if the length of the string is less than the minimum length', () => {
        // Arrange
        const min = 2;
        const max = min * 3;
        const lessThanMinLength = min - 1;
        const specification = new LengthStringSpecification({ min, max });

        let value = '';

        for (let index = 1; index <= lessThanMinLength; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(false);
      });

      test('should return false if the length of the string is greater than the maximum length', () => {
        // Arrange
        const min = 2;
        const max = min * 3;
        const greaterMaxLength = max + 1;
        const specification = new LengthStringSpecification({ min, max });

        let value = '';

        for (let index = 1; index <= greaterMaxLength; index++) {
          value += index;
        }

        // Act
        const result = specification.isSatisfiedBy(value);

        // Assert
        expect(result).toBe(false);
      });
    });
  });
});
