import { Dictionary } from '../dictionary';

describe('Dictionary', () => {
  describe('instance creation', () => {
    test('should return instance of Dictionary', () => {
      // Arrange

      // Act
      const instance = new Dictionary<string, string>();

      // Assert
      expect(instance).toBeInstanceOf(Dictionary);
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
});
