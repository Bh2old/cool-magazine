import { ResponseType } from '../response-type.value-object';
import { ManyResponseTypeVariantsSpecificationCandidatesExample } from '../specifications';
import { ResponseTypeVariants } from '../types/response-type-variants.type';

describe('ResponseType', () => {
  describe('instance creation', () => {
    describe('single instance', () => {
      test('should return instance of ResponseType with specifying type', () => {
        // Arrange
        const params = 'code';

        // Act
        const instance = ResponseType.create(params);

        // Assert
        expect(instance).toBeInstanceOf(ResponseType);
      });
    });

    describe('many different instances', () => {
      test('should return collection of ResponseTypes from collection of variants', () => {
        // Arrange
        const [firstValidVariants] =
          new ManyResponseTypeVariantsSpecificationCandidatesExample()
            .valid;

        const expected: ResponseType[] = [];

        firstValidVariants.forEach((variant) => {
          expected.push(ResponseType.create(variant));
        });

        // Act
        const instances = ResponseType.createMany(firstValidVariants);

        // Assert
        expect(instances).toStrictEqual(expected);
      });
    });
  });

  describe('getting value', () => {
    test('should return not empty string value if type is specified', () => {
      // Arrange
      const responseTypeVariants = Object.keys(
        ResponseType.RESPONSE_TYPES_VARIANTS
      ) as ResponseTypeVariants[];

      // Act
      const responseTypeValues = responseTypeVariants.map(
        (variant) => ResponseType.create(variant).value
      );

      // Assert
      expect(responseTypeValues).toStrictEqual(responseTypeVariants);
    });
  });
});
