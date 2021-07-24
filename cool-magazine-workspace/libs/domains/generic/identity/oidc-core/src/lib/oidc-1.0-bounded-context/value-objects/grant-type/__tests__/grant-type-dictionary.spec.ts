import { GrantTypeDictionary } from '../data-structures';
import {
  NoSuchTypeGrantTypeDictionaryError,
  TypeAlreadyContainsGrantTypeDictionaryError,
} from '../errors';
import { GrantType } from '../grant-type.value-object';
import { GrantTypeVariants } from '../types';

describe('GrantTypeDictionary', () => {
  describe('instance creation', () => {
    test('should return instance of GrantTypeDictionary', () => {
      // Arrange

      // Act
      const instance = new GrantTypeDictionary();

      // Assert
      expect(instance).toBeInstanceOf(GrantTypeDictionary);
    });

    test('should return instance of GrantTypeDictionary if iterable argument is specified', () => {
      // Arrange
      const grantTypeVariant = 'authorizationCode';
      const newItem = GrantType.create(grantTypeVariant);
      const iterableObject: Iterable<[GrantTypeVariants, GrantType]> = [
        [grantTypeVariant, newItem],
      ];

      // Act
      const instance = new GrantTypeDictionary(iterableObject);

      // Assert
      expect(instance).toBeInstanceOf(GrantTypeDictionary);
    });

    test('should return instance that contains elements from specified iterable object', () => {
      // Arrange
      const grantTypeVariant = 'authorizationCode';
      const newItem = GrantType.create(grantTypeVariant);
      const iterableObject: Iterable<[GrantTypeVariants, GrantType]> = [
        [grantTypeVariant, newItem],
      ];

      // Act
      const instance = new GrantTypeDictionary(iterableObject);

      // Assert
      expect(instance.get(grantTypeVariant).value).toBe(newItem);
    });

    test('should return immutable instance if specified iterable object', () => {
      // Arrange
      const grantTypeVariant = 'authorizationCode';
      const newItem = GrantType.create(grantTypeVariant);
      const variantForItemForMutation = 'implicit';
      const itemForMutation = GrantType.create(variantForItemForMutation);
      const iterableObject = [[grantTypeVariant, newItem]];

      // Act
      const instance = new GrantTypeDictionary(
        iterableObject as Iterable<[GrantTypeVariants, GrantType]>
      );
      iterableObject.push([variantForItemForMutation, itemForMutation]);

      // Assert
      expect(instance.hasType(variantForItemForMutation)).toBe(false);
    });

    test('should return instance that contains mutable elements from the specified iterable object', () => {
      // Arrange
      const grantTypeVariant = 'authorizationCode';
      const newItem = GrantType.create(grantTypeVariant);
      const iterableObject: Iterable<[GrantTypeVariants, GrantType]> = [
        [grantTypeVariant, newItem],
      ];

      // Act
      const instance = new GrantTypeDictionary(
        iterableObject as Iterable<[GrantTypeVariants, GrantType]>
      );

      // Assert
      expect(newItem).toBe(instance.get(grantTypeVariant).value);
    });
  });

  describe('adding item', () => {
    test('should return "Either.right" with same instance of GrantTypeDictionary if uniq type', () => {
      // Arrange
      const dictionary = new GrantTypeDictionary();
      const newItem = GrantType.createAsDefault();

      // Act
      const result = dictionary.add(newItem).value;

      // Assert
      expect(result).toBe(dictionary);
    });

    test('should return "Either.left" with error if not uniq type', () => {
      // Arrange
      const dictionary = new GrantTypeDictionary();
      const grantTypeVariant = 'authorizationCode';
      const newItem = GrantType.create(grantTypeVariant);
      const copyNewItem = GrantType.create(grantTypeVariant);
      dictionary.add(newItem);

      // Act
      const result = dictionary.add(copyNewItem).value;

      // Assert
      expect(result).toBeInstanceOf(
        TypeAlreadyContainsGrantTypeDictionaryError
      );
    });

    test('should not mutate already added item if not uniq type', () => {
      // Arrange
      const dictionary = new GrantTypeDictionary();
      const grantTypeVariant = 'authorizationCode';
      const newItem = GrantType.create(grantTypeVariant);
      const itemForMutation = GrantType.create(grantTypeVariant);
      dictionary.add(newItem);

      // Act
      dictionary.add(itemForMutation);

      // Assert
      expect(dictionary.get(grantTypeVariant).value).toBe(newItem);
    });
  });

  describe('check for the existence of a key', () => {
    test('should return true if key exists', () => {
      // Arrange
      const dictionary = new GrantTypeDictionary();
      const grantTypeVariant = 'authorizationCode';
      const newItem = GrantType.create(grantTypeVariant);
      dictionary.add(newItem);

      // Act
      const result = dictionary.hasType(grantTypeVariant);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if key not exists', () => {
      // Arrange
      const dictionary = new GrantTypeDictionary();
      const notAddedGrantTypeVariant = 'implicit';
      const addedGrantTypeVariant = 'authorizationCode';
      const newItem = GrantType.create(addedGrantTypeVariant);
      dictionary.add(newItem);

      // Act
      const result = dictionary.hasType(notAddedGrantTypeVariant);

      // Assert
      expect(result).toBe(false);
    });
  });

  describe('getting item', () => {
    test('should return "Either.right" with item if key exist', () => {
      // Arrange
      const dictionary = new GrantTypeDictionary();
      const grantTypeVariant = 'authorizationCode';
      const newItem = GrantType.create(grantTypeVariant);
      dictionary.add(newItem);

      // Act
      const result = dictionary.get(grantTypeVariant).value;

      // Assert
      expect(result).toBe(newItem);
    });

    test('should return "Either.left" with error if key not exist', () => {
      // Arrange
      const dictionary = new GrantTypeDictionary();
      const grantTypeVariant = 'authorizationCode';
      // Act
      const result = dictionary.get(grantTypeVariant).value;

      // Assert
      expect(result).toBeInstanceOf(NoSuchTypeGrantTypeDictionaryError);
    });
  });
});
