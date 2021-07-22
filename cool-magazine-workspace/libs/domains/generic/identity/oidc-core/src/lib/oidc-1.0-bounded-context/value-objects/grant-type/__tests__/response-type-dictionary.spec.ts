import { GrantTypeDictionary } from '../data-structures';
import {
  NoSuchTypeGrantTypeDictionaryError,
  TypeAlreadyContainsGrantTypeDictionaryError,
} from '../errors';
import { GrantType } from '../grant-type.value-object';

describe('GrantTypeDictionary', () => {
  describe('instance creation', () => {
    test('should return instance of GrantTypeDictionary', () => {
      // Arrange

      // Act
      const instance = new GrantTypeDictionary();

      // Assert
      expect(instance).toBeInstanceOf(GrantTypeDictionary);
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
