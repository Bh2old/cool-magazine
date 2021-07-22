import { ResponseTypeDictionary } from '../data-structures';
import {
  NoSuchTypeResponseTypeDictionaryError,
  TypeAlreadyContainsResponseTypeDictionaryError,
} from '../errors';
import { ResponseType } from '../response-type.value-object';

describe('ResponseTypeDictionary', () => {
  describe('instance creation', () => {
    test('should return instance of ResponseTypeDictionary', () => {
      // Arrange

      // Act
      const instance = new ResponseTypeDictionary();

      // Assert
      expect(instance).toBeInstanceOf(ResponseTypeDictionary);
    });
  });

  describe('adding item', () => {
    test('should return "Either.right" with same instance of ResponseTypeDictionary if uniq type', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const newItem = ResponseType.createAsDefault();

      // Act
      const result = dictionary.add(newItem).value;

      // Assert
      expect(result).toBe(dictionary);
    });

    test('should return "Either.left" with error if not uniq type', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const responseTypeVariant = 'code';
      const newItem = ResponseType.create(responseTypeVariant);
      const copyNewItem = ResponseType.create(responseTypeVariant);
      dictionary.add(newItem);

      // Act
      const result = dictionary.add(copyNewItem).value;

      // Assert
      expect(result).toBeInstanceOf(
        TypeAlreadyContainsResponseTypeDictionaryError
      );
    });

    test('should not mutate already added item if not uniq type', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const responseTypeVariant = 'code';
      const newItem = ResponseType.create(responseTypeVariant);
      const itemForMutation = ResponseType.create(responseTypeVariant);
      dictionary.add(newItem);

      // Act
      dictionary.add(itemForMutation);

      // Assert
      expect(dictionary.get(responseTypeVariant).value).toBe(newItem);
    });
  });

  describe('check for the existence of a key', () => {
    test('should return true if key exists', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const responseTypeVariant = 'code';
      const newItem = ResponseType.create(responseTypeVariant);
      dictionary.add(newItem);

      // Act
      const result = dictionary.hasType(responseTypeVariant);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if key not exists', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const notAddedResponseTypeVariant = 'none';
      const addedResponseTypeVariant = 'code';
      const newItem = ResponseType.create(addedResponseTypeVariant);
      dictionary.add(newItem);

      // Act
      const result = dictionary.hasType(notAddedResponseTypeVariant);

      // Assert
      expect(result).toBe(false);
    });
  });

  describe('getting item', () => {
    test('should return "Either.right" with item if key exist', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const responseTypeVariant = 'code';
      const newItem = ResponseType.create(responseTypeVariant);
      dictionary.add(newItem);

      // Act
      const result = dictionary.get(responseTypeVariant).value;

      // Assert
      expect(result).toBe(newItem);
    });

    test('should return "Either.left" with error if key not exist', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const responseTypeVariant = 'code';
      // Act
      const result = dictionary.get(responseTypeVariant).value;

      // Assert
      expect(result).toBeInstanceOf(NoSuchTypeResponseTypeDictionaryError);
    });
  });
});
