import {
  RedirectUrisPropertyClientMetadataCreateValuesSpecification,
  RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample,
} from '../../../../specifications';

describe('RedirectUrisPropertyClientMetadataCreateValuesSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new RedirectUrisPropertyClientMetadataCreateValuesSpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        RedirectUrisPropertyClientMetadataCreateValuesSpecification
      );
    });
  });

  describe('requirements checking', () => {
    describe('valid uris', () => {
      test('should return true for all uri', () => {
        // Arrange
        const instance =
          new RedirectUrisPropertyClientMetadataCreateValuesSpecification();
        const uris =
          new RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
            .valid;
        const expected: boolean[] = [];
        const getResult = () => {
          const result = [];
          for (const redirectUris of uris) {
            expected.push(true);
            result.push(instance.isSatisfiedBy({ redirectUris }));
          }

          return result;
        };

        // Act
        const result = getResult();

        // Assert
        expect(result).toStrictEqual(expected);
      });
    });

    describe('invalid uris', () => {
      test('should return false for all uri', () => {
        // Arrange
        const instance =
          new RedirectUrisPropertyClientMetadataCreateValuesSpecification();
        const uris =
          new RedirectUrisPropertyClientMetadataCreateValuesSpecificationCandidatesExample()
            .invalid;
        const expected: boolean[] = [];
        const getResult = () => {
          const result = [];
          for (const redirectUris of uris) {
            expected.push(false);
            result.push(instance.isSatisfiedBy({ redirectUris }));
          }

          return result;
        };

        // Act
        const result = getResult();

        // Assert
        expect(result).toStrictEqual(expected);
      });
    });
  });
});
