import { ResponseTypeDictionary } from '..';
import { ResponseType } from '../../response-type.value-object';
import { ResponseTypeVariants } from '../../types';

describe('ResponseTypeDictionary', () => {
  describe('instance creation', () => {
    describe('constructor overload with zero params', () => {
      test('should return instance of ResponseTypeDictionary', () => {
        // Arrange

        // Act
        const instance = new ResponseTypeDictionary();

        // Assert
        expect(instance).toBeInstanceOf(ResponseTypeDictionary);
      });
    });

    describe('constructor overload with Iterable<[ResponseTypeVariants, ResponseType]> param', () => {
      test('should return instance of ResponseTypeDictionary if iterable argument is specified', () => {
        // Arrange
        const responseTypeVariant = 'code';
        const newItem = ResponseType.create(responseTypeVariant);
        const iterableObject: Iterable<[ResponseTypeVariants, ResponseType]> = [
          [responseTypeVariant, newItem],
        ];

        // Act
        const instance = new ResponseTypeDictionary(iterableObject);

        // Assert
        expect(instance).toBeInstanceOf(ResponseTypeDictionary);
      });

      test('should return instance that contains elements from specified iterable object', () => {
        // Arrange
        const responseTypeVariant = 'code';
        const newItem = ResponseType.create(responseTypeVariant);
        const iterableObject: Iterable<[ResponseTypeVariants, ResponseType]> = [
          [responseTypeVariant, newItem],
        ];

        // Act
        const instance = new ResponseTypeDictionary(iterableObject);

        // Assert
        expect(instance.get(responseTypeVariant)).toBe(newItem);
      });

      test('should return immutable instance if specified iterable object', () => {
        // Arrange
        const responseTypeVariant = 'code';
        const newItem = ResponseType.create(responseTypeVariant);
        const variantForItemForMutation = 'code id_token';
        const itemForMutation = ResponseType.create(variantForItemForMutation);
        const iterableObject = [[responseTypeVariant, newItem]];

        // Act
        const instance = new ResponseTypeDictionary(
          iterableObject as Iterable<[ResponseTypeVariants, ResponseType]>
        );
        iterableObject.push([variantForItemForMutation, itemForMutation]);

        // Assert
        expect(instance.hasType(variantForItemForMutation)).toBe(false);
      });

      test('should return instance that contains mutable elements from the specified iterable object', () => {
        // Arrange
        const responseTypeVariant = 'code';
        const newItem = ResponseType.create(responseTypeVariant);
        const iterableObject: Iterable<[ResponseTypeVariants, ResponseType]> = [
          [responseTypeVariant, newItem],
        ];

        // Act
        const instance = new ResponseTypeDictionary(
          iterableObject as Iterable<[ResponseTypeVariants, ResponseType]>
        );

        // Assert
        expect(newItem).toBe(instance.get(responseTypeVariant));
      });
    });

    describe('constructor overload with Iterable<ResponseTypeVariants> param', () => {
      test('should return instance of ResponseTypeDictionary if iterable argument is specified', () => {
        // Arrange
        const responseTypeVariant = 'code';
        const iterableObject: Iterable<ResponseTypeVariants> = [
          responseTypeVariant,
        ];

        // Act
        const instance = new ResponseTypeDictionary(iterableObject);

        // Assert
        expect(instance).toBeInstanceOf(ResponseTypeDictionary);
      });

      test('should return instance that contains elements from specified iterable object', () => {
        // Arrange
        const responseTypeVariant = 'code';
        const iterableObject: Iterable<ResponseTypeVariants> = [
          responseTypeVariant,
        ];

        // Act
        const instance = new ResponseTypeDictionary(iterableObject);

        // Assert
        expect(instance.get(responseTypeVariant).value).toBe(
          responseTypeVariant
        );
      });

      test('should return immutable instance if specified iterable object', () => {
        // Arrange
        const responseTypeVariant = 'code';
        const variantForItemForMutation = 'code id_token';
        const iterableObject: ResponseTypeVariants[] = [responseTypeVariant];

        // Act
        const instance = new ResponseTypeDictionary(iterableObject);
        iterableObject.push(variantForItemForMutation);

        // Assert
        expect(instance.hasType(variantForItemForMutation)).toBe(false);
      });
    });
  });

  describe('adding item', () => {
    test('should return same instance of ResponseTypeDictionary if uniq type', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const newItem = ResponseType.create('code');

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
      const notAddedResponseTypeVariant = 'code id_token';
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

  describe('getting values', () => {
    test('should implement an iterable protocol for collection of dictionary items values', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const responseTypeVariant = 'code';
      const newItem = ResponseType.create(responseTypeVariant);
      dictionary.add(newItem);

      // Act
      const [value] = dictionary.values();

      // Assert
      expect(value).toBe(newItem);
    });

    test('should implement an iterator protocol for collection of dictionary items values', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();
      const responseTypeVariant = 'code';
      const newItem = ResponseType.create(responseTypeVariant);
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
    test('should return cloned instance of ResponseTypeDictionary', () => {
      // Arrange
      const dictionary = new ResponseTypeDictionary();

      // Act
      const clone = dictionary.clone();

      // Assert
      expect(clone).toBeInstanceOf(ResponseTypeDictionary);
    });

    test('should return immutable instance', () => {
      // Arrange
      const responseTypeVariant = 'code';
      const newItem = ResponseType.create(responseTypeVariant);
      const variantForItemForMutation = 'code id_token';
      const itemForMutation = ResponseType.create(variantForItemForMutation);
      const iterableObject = [[responseTypeVariant, newItem]];
      const dictionary = new ResponseTypeDictionary(
        iterableObject as Iterable<[ResponseTypeVariants, ResponseType]>
      );

      // Act
      const clone = dictionary.clone();
      clone.add(itemForMutation);

      // Assert
      expect(dictionary.hasType(variantForItemForMutation)).toBe(false);
    });

    test('should return instance that contains mutable elements', () => {
      // Arrange
      const responseTypeVariant = 'code';
      const newItem = ResponseType.create(responseTypeVariant);
      const iterableObject: Iterable<[ResponseTypeVariants, ResponseType]> = [
        [responseTypeVariant, newItem],
      ];
      const dictionary = new ResponseTypeDictionary(
        iterableObject as Iterable<[ResponseTypeVariants, ResponseType]>
      );

      // Act
      const clone = dictionary.clone();

      // Assert
      expect(newItem).toBe(clone.get(responseTypeVariant));
    });
  });
});
