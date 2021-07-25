import { GrantTypeDictionary } from '../data-structures';
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
      expect(instance.get(grantTypeVariant)).toBe(newItem);
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
      expect(newItem).toBe(instance.get(grantTypeVariant));
    });
  });

  describe('adding item', () => {
    test('should return same instance of GrantTypeDictionary if uniq type', () => {
      // Arrange
      const dictionary = new GrantTypeDictionary();
      const newItem = GrantType.createAsDefault();

      // Act
      const result = dictionary.add(newItem);

      // Assert
      expect(result).toBe(dictionary);
    });

    test('should replace the existing item with a new one if not uniq type', () => {
      // Arrange
      const dictionary = new GrantTypeDictionary();
      const grantTypeVariant = 'authorizationCode';
      const newItem = GrantType.create(grantTypeVariant);
      const itemForMutation = GrantType.create(grantTypeVariant);
      dictionary.add(newItem);

      // Act
      dictionary.add(itemForMutation);

      // Assert
      expect(dictionary.get(grantTypeVariant)).toBe(itemForMutation);
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
    test('should return item if key exist', () => {
      // Arrange
      const dictionary = new GrantTypeDictionary();
      const grantTypeVariant = 'authorizationCode';
      const newItem = GrantType.create(grantTypeVariant);
      dictionary.add(newItem);

      // Act
      const result = dictionary.get(grantTypeVariant);

      // Assert
      expect(result).toBe(newItem);
    });

    test('should return undefined if key not exist', () => {
      // Arrange
      const dictionary = new GrantTypeDictionary();
      const grantTypeVariant = 'authorizationCode';
      // Act
      const result = dictionary.get(grantTypeVariant);

      // Assert
      expect(result).toBe(undefined);
    });
  });

  describe('clone dictionary', () => {
    test('should return cloned instance of GrantTypeDictionary', () => {
      // Arrange
      const dictionary = new GrantTypeDictionary();

      // Act
      const clone = dictionary.clone();

      // Assert
      expect(clone).toBeInstanceOf(GrantTypeDictionary);
    });

    test('should return immutable instance', () => {
      // Arrange
      const responseTypeVariant = 'authorizationCode';
      const newItem = GrantType.create(responseTypeVariant);
      const variantForItemForMutation = 'implicit';
      const itemForMutation = GrantType.create(variantForItemForMutation);
      const iterableObject = [[responseTypeVariant, newItem]];
      const dictionary = new GrantTypeDictionary(
        iterableObject as Iterable<[GrantTypeVariants, GrantType]>
      );

      // Act
      const clone = dictionary.clone();
      clone.add(itemForMutation);

      // Assert
      expect(dictionary.hasType(variantForItemForMutation)).toBe(false);
    });

    test('should return instance that contains mutable elements', () => {
      // Arrange
      const responseTypeVariant = 'authorizationCode';
      const newItem = GrantType.create(responseTypeVariant);
      const iterableObject: Iterable<[GrantTypeVariants, GrantType]> = [
        [responseTypeVariant, newItem],
      ];
      const dictionary = new GrantTypeDictionary(
        iterableObject as Iterable<[GrantTypeVariants, GrantType]>
      );

      // Act
      const clone = dictionary.clone();

      // Assert
      expect(newItem).toBe(clone.get(responseTypeVariant));
    });
  });
});
