import { NoTraversalPathUriComponentSpecification } from '../no-traversal-path-uri-component-specification';
describe('NoTraversalPathUriComponentSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new NoTraversalPathUriComponentSpecification();

      // Assert
      expect(instance).toBeInstanceOf(NoTraversalPathUriComponentSpecification);
    });
  });

  describe('checking requirements', () => {
    describe('when candidate path is specified as string type', () => {
      test('should return true if path do not contain traversal', () => {
        // Arrange
        const path = '/loadImage?filename=./images/218.png';
        const instance = new NoTraversalPathUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(path);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false for all paths containing traversal symbols', () => {
        // Arrange
        const instance = new NoTraversalPathUriComponentSpecification();
        const traversalSymbolVariants = instance.traversalSymbolVariants;
        const expected = [];
        const traversalPaths = traversalSymbolVariants.map((variant) => {
          expected.push(false);
          return `/loadImage?filename=${variant}etc/passwd`;
        });

        // Act
        const results = traversalPaths.map((path) =>
          instance.isSatisfiedBy(path)
        );

        // Assert
        expect(results).toStrictEqual(expected);
      });
    });

    describe('when candidate path is specified as object type', () => {
      test('should return true if path do not contain traversal', () => {
        // Arrange
        const path = { path: '/loadImage?filename=./images/218.png' };
        const instance = new NoTraversalPathUriComponentSpecification();

        // Act
        const result = instance.isSatisfiedBy(path);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false for all paths containing traversal symbols', () => {
        // Arrange
        const instance = new NoTraversalPathUriComponentSpecification();
        const traversalSymbolVariants = instance.traversalSymbolVariants;
        const expected = [];
        const traversalPaths = traversalSymbolVariants.map((variant) => {
          expected.push(false);
          return { path: `/loadImage?filename=${variant}etc/passwd` };
        });

        // Act
        const results = traversalPaths.map((path) =>
          instance.isSatisfiedBy(path)
        );

        // Assert
        expect(results).toStrictEqual(expected);
      });
    });
  });
});
