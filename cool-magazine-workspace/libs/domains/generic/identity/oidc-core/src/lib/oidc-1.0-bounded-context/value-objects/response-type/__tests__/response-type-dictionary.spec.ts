import { ResponseTypeDictionary } from '../data-structures';
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
    test('should return same instance of ResponseTypeDictionary if uniq type', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const newItem = ResponseType.createAsDefault();

      // Act
      const result = dictionary.add(newItem);

      // Assert
      expect(result).toBe(dictionary);
    });

    test('should replace the existing item with a new one if not uniq type', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const responseTypeVariant = 'code';
      const newItem = ResponseType.create(responseTypeVariant);
      const itemForMutation = ResponseType.create(responseTypeVariant);
      dictionary.add(newItem);

      // Act
      dictionary.add(itemForMutation);

      // Assert
      expect(dictionary.get(responseTypeVariant)).toBe(itemForMutation);
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
    test('should return item if key exist', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const responseTypeVariant = 'code';
      const newItem = ResponseType.create(responseTypeVariant);
      dictionary.add(newItem);

      // Act
      const result = dictionary.get(responseTypeVariant);

      // Assert
      expect(result).toBe(newItem);
    });

    test('should return undefined if key not exist', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const responseTypeVariant = 'code';
      // Act
      const result = dictionary.get(responseTypeVariant);

      // Assert
      expect(result).toBe(undefined);
    });
  });
});
