import { RedirectUriDictionary } from '../data-structures';
import { RedirectUri } from '../redirect-uri.value-object';

describe('RedirectUriDictionary', () => {
  describe('instance creation', () => {
    test('should return instance of RedirectUriDictionary', () => {
      // Arrange

      // Act
      const instance = new RedirectUriDictionary();

      // Assert
      expect(instance).toBeInstanceOf(RedirectUriDictionary);
    });
  });

  describe('adding item', () => {
    test('should return same instance of RedirectUriDictionary if uniq uri', () => {
      // Arrange
      const dictionary = new RedirectUriDictionary();
      const newItem = RedirectUri.create('http://asd.ru');

      // Act
      const result = dictionary.add(newItem);

      // Assert
      expect(result).toBe(dictionary);
    });

    test('should replace the existing item with a new one if not uniq uri', () => {
      // Arrange
      const dictionary = new RedirectUriDictionary();
      const uri = 'http://asd.ru';
      const newItem = RedirectUri.create(uri);
      const itemForMutation = RedirectUri.create(uri);
      dictionary.add(newItem);

      // Act
      dictionary.add(itemForMutation);

      // Assert
      expect(dictionary.get(uri)).toBe(itemForMutation);
    });
  });

  describe('check for the existence of a key', () => {
    test('should return true if key exists', () => {
      // Arrange
      const dictionary = new RedirectUriDictionary();
      const uri = 'http://asd.ru';
      const newItem = RedirectUri.create(uri);
      dictionary.add(newItem);

      // Act
      const result = dictionary.hasUri(uri);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if key not exists', () => {
      // Arrange
      const dictionary = new RedirectUriDictionary();
      const notAddedUri = 'http://asd.ru';
      const addedUri = 'https://qwe.com';
      const newItem = RedirectUri.create(addedUri);
      dictionary.add(newItem);

      // Act
      const result = dictionary.hasUri(notAddedUri);

      // Assert
      expect(result).toBe(false);
    });
  });

  describe('getting item', () => {
    test('should return item if key exist', () => {
      // Arrange
      const dictionary = new RedirectUriDictionary();
      const uri = 'http://asd.ru';
      const newItem = RedirectUri.create(uri);
      dictionary.add(newItem);

      // Act
      const result = dictionary.get(uri);

      // Assert
      expect(result).toBe(newItem);
    });

    test('should return undefined if key not exist', () => {
      // Arrange
      const dictionary = new RedirectUriDictionary();
      const uri = 'http://asd.ru';
      // Act
      const result = dictionary.get(uri);

      // Assert
      expect(result).toBe(undefined);
    });
  });
});
