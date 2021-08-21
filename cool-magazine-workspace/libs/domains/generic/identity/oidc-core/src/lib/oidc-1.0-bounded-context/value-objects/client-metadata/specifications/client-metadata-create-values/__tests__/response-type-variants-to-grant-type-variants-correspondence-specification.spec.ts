import { GrantTypeVariants } from '../../../../grant-type';
import { ResponseTypeVariants } from '../../../../response-type';
import { ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification } from '../../../specifications';
import { IClientMetadataCreateValues } from './../../../models';

describe('ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance =
        new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification();

      // Assert
      expect(instance).toBeInstanceOf(
        ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification
      );
    });
  });

  describe('requirements checking', () => {
    describe('case where both types of variants are present', () => {
      test('should return true if variants satisfy to correspondence', () => {
        // Arrange
        const instance =
          new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification();

        const values: IClientMetadataCreateValues = {
          redirectUris: undefined,
          responseTypeVariants: new Set<ResponseTypeVariants>([
            'code',
            'id_token',
            'token id_token',
            'code id_token',
            'code token',
            'code token id_token',
          ]),
          grantTypeVariants: new Set<GrantTypeVariants>([
            'authorization_code',
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
          new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification();

        const values: IClientMetadataCreateValues = {
          redirectUris: undefined,
          responseTypeVariants: new Set<ResponseTypeVariants>([
            'code',
            'id_token',
            'token id_token',
            'code id_token',
            'code token',
            'code token id_token',
          ]),
          grantTypeVariants: new Set<GrantTypeVariants>(['refresh_token']),
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
          new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification();

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
          new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification();

        const values: IClientMetadataCreateValues = {
          redirectUris: undefined,
          responseTypeVariants: new Set<ResponseTypeVariants>([
            'code',
            'id_token',
            'token id_token',
            'code id_token',
            'code token',
            'code token id_token',
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
          new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification();

        const values: IClientMetadataCreateValues = {
          redirectUris: undefined,
          grantTypeVariants: new Set<GrantTypeVariants>([
            'authorization_code',
            'implicit',
            'refresh_token',
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
          new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification();

        const values: IClientMetadataCreateValues = {
          redirectUris: undefined,
          grantTypeVariants: new Set<GrantTypeVariants>([
            'implicit',
            'refresh_token',
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
          new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification();

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
