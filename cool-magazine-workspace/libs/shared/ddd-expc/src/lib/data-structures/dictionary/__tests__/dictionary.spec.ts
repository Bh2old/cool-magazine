import { Dictionary } from '../dictionary';

describe('Dictionary', () => {
  describe('instance creation', () => {
    test('should return instance of Dictionary if 0 arguments', () => {
      // Arrange

      // Act
      const instance = new Dictionary<string, string>();

      // Assert
      expect(instance).toBeInstanceOf(Dictionary);
    });

    test('should return instance of Dictionary if iterable argument is specified', () => {
      // Arrange
      const iterableObject = [['1', 'one']] as Iterable<[string, string]>;

      // Act
      const instance = new Dictionary<string, string>(iterableObject);

      // Assert
      expect(instance).toBeInstanceOf(Dictionary);
    });

    test('should return instance that contains elements from specified iterable object', () => {
      // Arrange
      const iterableObject = [['1', 'one']] as Iterable<[string, string]>;

      // Act
      const instance = new Dictionary<string, string>(iterableObject);

      // Assert
      expect([...instance.entries()]).toStrictEqual(iterableObject);
    });

    test('should return immutable instance if specified iterable object', () => {
      // Arrange
      const iterableObject = [['1', 'one']];

      // Act
      const instance = new Dictionary<string, string>(
        iterableObject as Iterable<[string, string]>
      );
      iterableObject.push(['2', 'two']);

      // Assert
      expect(instance.count).not.toBe(iterableObject.length);
    });

    test('should return instance that contains mutable elements from the specified iterable object', () => {
      // Arrange
      const keyItem = '1';
      const valueItem = { one: 'one' };
      const item = [keyItem, valueItem];
      const iterableObject = [item];

      // Act
      const instance = new Dictionary<string, { one: string }>(
        iterableObject as Iterable<[string, { one: string }]>
      );

      // Assert
      expect(valueItem).toBe(instance.get(keyItem));
    });
  });

  describe('adding item', () => {
    test('should return instance of Dictionary', () => {
      // Arrange
      const dictionary = new Dictionary<number, string>();
      const newItem = { key: 1, value: 'one' };

      // Act
      const result = dictionary.add(newItem.key, newItem.value);

      // Assert
      expect(result).toBe(dictionary);
    });

    test('should replace the existing item with a new one if not uniq uri', () => {
      // Arrange
      const dictionary = new Dictionary<number, string>();
      const newItem = { key: 1, value: 'one' };
      const itemForMutationTesting = { key: 1, value: 'mutated' };
      dictionary.add(newItem.key, newItem.value);

      // Act
      dictionary.add(itemForMutationTesting.key, itemForMutationTesting.value);

      // Assert
      expect(dictionary.get(newItem.key)).toBe(itemForMutationTesting.value);
    });
  });

  describe('check for the existence of a key', () => {
    test('should return true if key exists', () => {
      // Arrange
      const dictionary = new Dictionary<number, string>();
      const newItem = { key: 1, value: 'one' };
      dictionary.add(newItem.key, newItem.value);

      // Act
      const result = dictionary.hasKey(newItem.key);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if key not exists', () => {
      // Arrange
      const dictionary = new Dictionary<number, string>();
      const newItem = { key: 1, value: 'one' };
      dictionary.add(newItem.key, newItem.value);

      // Act
      const result = dictionary.hasKey(newItem.key + 1);

      // Assert
      expect(result).toBe(false);
    });
  });

  describe('getting item', () => {
    test('should return item if key exist', () => {
      // Arrange
      const dictionary = new Dictionary<number, string>();
      const newItem = { key: 1, value: 'one' };
      dictionary.add(newItem.key, newItem.value);

      // Act
      const result = dictionary.get(newItem.key);

      // Assert
      expect(result).toBe(newItem.value);
    });

    test('should return undefined if key not exist', () => {
      // Arrange
      const dictionary = new Dictionary<number, string>();
      const key = 1;

      // Act
      const result = dictionary.get(key);

      // Assert
      expect(result).toBe(undefined);
    });
  });

  describe('getting size dictionary', () => {
    test('should return the number of items equal to zero if the dictionary is empty', () => {
      // Arrange
      const dictionary = new Dictionary<number, string>();
      const ZERO_COUNT_EMPTY_DICTIONARY = 0;
      // Act
      const result = dictionary.count;

      // Assert
      expect(result).toBe(ZERO_COUNT_EMPTY_DICTIONARY);
    });

    test('should return the size of the dictionary as equal to the number of items added', () => {
      // Arrange
      const dictionary = new Dictionary<number, number>();
      const countNewItem = 2;
      for (let index = 0; index < countNewItem; index++) {
        dictionary.add(index, index + 1);
      }

      // Act
      const result = dictionary.count;

      // Assert
      expect(result).toBe(countNewItem);
    });
  });

  describe('getting entries', () => {
    test('should implement an iterable protocol for collection of dictionary items', () => {
      // Arrange
      const dictionary = new Dictionary<number, string>();
      const newItem = { key: 1, value: 'one' };
      const expected = [newItem.key, newItem.value];
      dictionary.add(newItem.key, newItem.value);

      // Act
      const [entries] = dictionary.entries();

      // Assert
      expect(entries).toStrictEqual(expected);
    });

    test('should implement an iterator protocol for collection of dictionary items', () => {
      // Arrange
      const dictionary = new Dictionary<number, string>();
      const newItem = { key: 1, value: 'one' };
      const expected = { value: [newItem.key, newItem.value], done: false };
      dictionary.add(newItem.key, newItem.value);
      const iterator = dictionary.entries();

      // Act
      const firstIterationResult = iterator.next();

      // Assert
      expect(firstIterationResult).toStrictEqual(expected);
    });
  });

  describe('iterable dictionary', () => {
    test('should implement an iterable protocol for collection of dictionary items', () => {
      // Arrange
      const dictionary = new Dictionary<number, string>();
      const newItem = { key: 1, value: 'one' };
      const expected = [newItem.key, newItem.value];
      dictionary.add(newItem.key, newItem.value);

      // Act
      const [entries] = dictionary;

      // Assert
      expect(entries).toStrictEqual(expected);
    });
  });

  describe('getting values', () => {
    test('should implement an iterable protocol for collection of dictionary items values', () => {
      // Arrange
      const dictionary = new Dictionary<number, string>();
      const newItem = { key: 1, value: 'one' };
      dictionary.add(newItem.key, newItem.value);

      // Act
      const [value] = dictionary.values();

      // Assert
      expect(value).toStrictEqual(newItem.value);
    });

    test('should implement an iterator protocol for collection of dictionary items values', () => {
      // Arrange
      const dictionary = new Dictionary<number, string>();
      const newItem = { key: 1, value: 'one' };
      const expected = { value: newItem.value, done: false };
      dictionary.add(newItem.key, newItem.value);
      const iterator = dictionary.values();

      // Act
      const firstIterationResult = iterator.next();

      // Assert
      expect(firstIterationResult).toStrictEqual(expected);
    });
  });
});
