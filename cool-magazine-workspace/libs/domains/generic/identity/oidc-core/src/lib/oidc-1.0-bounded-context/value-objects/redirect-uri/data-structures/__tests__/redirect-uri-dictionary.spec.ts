import { RedirectUriDictionary } from '../redirect-uri-dictionary';
import { RedirectUri } from '../../redirect-uri.value-object';

describe('RedirectUriDictionary', () => {
  describe('instance creation', () => {
    describe('constructor overload with zero params', () => {
      test('should return instance of RedirectUriDictionary', () => {
        // Arrange

        // Act
        const instance = new RedirectUriDictionary();

        // Assert
        expect(instance).toBeInstanceOf(RedirectUriDictionary);
      });
    });

    describe('constructor overload with Iterable<[Uri, RedirectUri]> param', () => {
      test('should return instance of RedirectUriDictionary if iterable argument is specified', () => {
        // Arrange
        const uri = 'http://asd.ru';
        const newItem = RedirectUri.create(uri);
        const iterableObject: Iterable<[string, RedirectUri]> = [
          ['1', newItem],
        ];

        // Act
        const instance = new RedirectUriDictionary(iterableObject);

        // Assert
        expect(instance).toBeInstanceOf(RedirectUriDictionary);
      });

      test('should return instance that contains elements from specified iterable object', () => {
        // Arrange
        const uri = 'http://asd.ru';
        const newItem = RedirectUri.create(uri);
        const iterableObject: Iterable<[string, RedirectUri]> = [
          [uri, newItem],
        ];

        // Act
        const instance = new RedirectUriDictionary(iterableObject);

        // Assert
        expect(instance.get(uri)).toBe(newItem);
      });

      test('should return immutable instance if specified iterable object', () => {
        // Arrange
        const uri = 'http://asd.ru';
        const newItem = RedirectUri.create(uri);
        const uriForItemForMutation = 'http://gggg.wwww';
        const itemForMutation = RedirectUri.create(uriForItemForMutation);
        const iterableObject = [[uri, newItem]];

        // Act
        const instance = new RedirectUriDictionary(
          iterableObject as Iterable<[string, RedirectUri]>
        );
        iterableObject.push([uriForItemForMutation, itemForMutation]);

        // Assert
        expect(instance.hasUri(uriForItemForMutation)).toBe(false);
      });

      test('should return instance that contains mutable elements from the specified iterable object', () => {
        // Arrange
        const uri = 'http://asd.ru';
        const newItem = RedirectUri.create(uri);
        const iterableObject = [[uri, newItem]];

        // Act
        const instance = new RedirectUriDictionary(
          iterableObject as Iterable<[string, RedirectUri]>
        );

        // Assert
        expect(newItem).toBe(instance.get(uri));
      });
    });

    describe('constructor overload with Iterable<UriForRedirectUriCreation> param', () => {
      test('should return instance of RedirectUriDictionary if iterable argument is specified', () => {
        // Arrange
        const uri = 'http://asd.ru';
        const iterableObject: Iterable<string> = [uri];

        // Act
        const instance = new RedirectUriDictionary(iterableObject);

        // Assert
        expect(instance).toBeInstanceOf(RedirectUriDictionary);
      });

      test('should return instance that contains elements from specified iterable object', () => {
        // Arrange
        const uri = 'http://asd.ru';
        const iterableObject: Iterable<string> = [uri];

        // Act
        const instance = new RedirectUriDictionary(iterableObject);

        // Assert
        expect((instance.get(uri) as RedirectUri).value).toBe(uri);
      });

      test('should return immutable instance if specified iterable object', () => {
        // Arrange
        const uri = 'http://asd.ru';
        const uriForItemForMutation = 'http://gggg.wwww';
        const iterableObject = [uri];

        // Act
        const instance = new RedirectUriDictionary(iterableObject);
        iterableObject.push(uriForItemForMutation);

        // Assert
        expect(instance.hasUri(uriForItemForMutation)).toBe(false);
      });
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

  describe('getting values', () => {
    test('should implement an iterable protocol for collection of dictionary items values', () => {
      // Arrange
      const dictionary = new RedirectUriDictionary();
      const uri = 'http://asd.ru';
      const newItem = RedirectUri.create(uri);
      dictionary.add(newItem);

      // Act
      const [value] = dictionary.values();

      // Assert
      expect(value).toBe(newItem);
    });

    test('should implement an iterator protocol for collection of dictionary items values', () => {
      // Arrange
      const dictionary = new RedirectUriDictionary();
      const uri = 'http://asd.ru';
      const newItem = RedirectUri.create(uri);
      const expected = { value: newItem, done: false };
      dictionary.add(newItem);
      const iterator = dictionary.values();

      // Act
      const firstIterationResult = iterator.next();

      // Assert
      expect(firstIterationResult).toStrictEqual(expected);
    });
  });

  describe('clone dictionary', () => {
    test('should return cloned instance of RedirectUriDictionary', () => {
      // Arrange
      const dictionary = new RedirectUriDictionary();

      // Act
      const clone = dictionary.clone();

      // Assert
      expect(clone).toBeInstanceOf(RedirectUriDictionary);
    });

    test('should return immutable instance', () => {
      // Arrange
      const uri = 'http://asd.ru';
      const newItem = RedirectUri.create(uri);
      const uriForItemForMutation = 'http://gggg.wwww';
      const itemForMutation = RedirectUri.create(uriForItemForMutation);
      const iterableObject = [[uri, newItem]];
      const dictionary = new RedirectUriDictionary(
        iterableObject as Iterable<[string, RedirectUri]>
      );

      // Act
      const clone = dictionary.clone();
      clone.add(itemForMutation);

      // Assert
      expect(dictionary.hasUri(uriForItemForMutation)).toBe(false);
    });

    test('should return instance that contains mutable elements', () => {
      // Arrange
      const uri = 'http://asd.ru';
      const newItem = RedirectUri.create(uri);
      const iterableObject = [[uri, newItem]];
      const dictionary = new RedirectUriDictionary(
        iterableObject as Iterable<[string, RedirectUri]>
      );
      // Act
      const clone = dictionary.clone();

      // Assert
      expect(newItem).toBe(clone.get(uri));
    });
  });
});
