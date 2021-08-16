import { GrantTypeVariants } from '../../grant-type';
import { ResponseTypeVariants } from '../../response-type';
import { IClientMetadataCreateValues } from '../models';
import { GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification } from '../specifications';

describe('GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification
      );
    });
  });

  describe('requirements checking', () => {
    test('should return false if grant type variants are empty collection', () => {
      // Arrange
      const variants: IClientMetadataCreateValues = {
        redirectUris: new Set<string>(),
        grantTypeVariants: new Set<GrantTypeVariants>(),
      };

      const instance =
        new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

      // Act
      const result = instance.isSatisfiedBy(variants);

      // Assert
      expect(result).toBe(false);
    });

    describe('case where both types of variants are present', () => {
      test('should return true if variants satisfy to correspondence', () => {
        // Arrange
        const instance =
          new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

        const values: IClientMetadataCreateValues = {
          redirectUris: undefined,
          responseTypeVariants: new Set<ResponseTypeVariants>([
            'code',
            'idToken',
            'tokenIdToken',
            'codeIdToken',
            'codeToken',
            'codeTokenIdToken',
          ]),
          grantTypeVariants: new Set<GrantTypeVariants>([
            'authorizationCode',
            'implicit',
          ]),
        };

        // Act
        const result = instance.isSatisfiedBy(values);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if variants don not satisfy to correspondence', () => {
        // Arrange
        const instance =
          new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

        const values: IClientMetadataCreateValues = {
          redirectUris: undefined,
          responseTypeVariants: new Set<ResponseTypeVariants>([
            'code',
            'idToken',
            'tokenIdToken',
            'codeIdToken',
            'codeToken',
            'codeTokenIdToken',
          ]),
          grantTypeVariants: new Set<GrantTypeVariants>(['refreshToken']),
        };

        // Act
        const result = instance.isSatisfiedBy(values);

        // Assert
        expect(result).toBe(false);
      });
    });

    describe('case where only response type variants are present', () => {
      test('should return true if variants satisfy to correspondence', () => {
        // Arrange
        const instance =
          new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

        const values: IClientMetadataCreateValues = {
          redirectUris: undefined,
          responseTypeVariants: new Set<ResponseTypeVariants>(['code']),
        };

        // Act
        const result = instance.isSatisfiedBy(values);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if variants don not satisfy to correspondence', () => {
        // Arrange
        const instance =
          new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

        const values: IClientMetadataCreateValues = {
          redirectUris: undefined,
          responseTypeVariants: new Set<ResponseTypeVariants>([
            'code',
            'idToken',
            'tokenIdToken',
            'codeIdToken',
            'codeToken',
            'codeTokenIdToken',
          ]),
        };

        // Act
        const result = instance.isSatisfiedBy(values);

        // Assert
        expect(result).toBe(false);
      });
    });

    describe('case where only grant type variants are present', () => {
      test('should return true if variants satisfy to correspondence', () => {
        // Arrange
        const instance =
          new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

        const values: IClientMetadataCreateValues = {
          redirectUris: undefined,
          grantTypeVariants: new Set<GrantTypeVariants>([
            'authorizationCode',
            'implicit',
            'refreshToken',
          ]),
        };

        // Act
        const result = instance.isSatisfiedBy(values);

        // Assert
        expect(result).toBe(true);
      });

      test('should return false if variants don not satisfy to correspondence', () => {
        // Arrange
        const instance =
          new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

        const values: IClientMetadataCreateValues = {
          redirectUris: undefined,
          grantTypeVariants: new Set<GrantTypeVariants>([
            'implicit',
            'refreshToken',
          ]),
        };

        // Act
        const result = instance.isSatisfiedBy(values);

        // Assert
        expect(result).toBe(false);
      });
    });

    describe('case where both types of variants are not present', () => {
      test('should return true if variants satisfy to correspondence', () => {
        // Arrange
        const instance =
          new GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification();

        const values: IClientMetadataCreateValues = {
          redirectUris: undefined,
        };

        // Act
        const result = instance.isSatisfiedBy(values);

        // Assert
        expect(result).toBe(true);
      });
    });
  });
});
