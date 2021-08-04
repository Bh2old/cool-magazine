import { UriReferenceParser } from '../../../uri-reference-parser/uri-reference-parser';
import { AbsoluteUrlSpecification } from '../absolute-url-specification';

describe('AbsoluteUrlSpecification', () => {
  describe('instance creation', () => {
    test('should return instance of AbsoluteUrlSpecification', () => {
      // Arrange

      // Act
      const instance = new AbsoluteUrlSpecification();

      // Assert
      expect(instance).toBeInstanceOf(AbsoluteUrlSpecification);
    });
  });

  describe('check requirements', () => {
    test('should return true if uri contains scheme, authority and no path, no query, no fragment', () => {
      // Arrange
      const scheme = 'http';
      const firstLevelDomain = 'firstdomain';
      const secondLevelDomain = 'seconddomain';
      const thirdLevelDomain = 'thirddomain';
      const authority = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;

      const uri = `${scheme}://${authority}`;

      const parser = new UriReferenceParser();
      const parsingResult = parser.parse(uri);

      const instance = new AbsoluteUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(parsingResult);

      // Assert
      expect(result).toBe(true);
    });

    test('should return true if uri contains scheme, authority, path and no query, no fragment', () => {
      // Arrange
      const scheme = 'http';
      const firstLevelDomain = 'firstdomain';
      const secondLevelDomain = 'seconddomain';
      const thirdLevelDomain = 'thirddomain';
      const authority = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;
      const path = '/one/two/three/';

      const uri = `${scheme}://${authority}${path}`;

      const parser = new UriReferenceParser();
      const parsingResult = parser.parse(uri);

      const instance = new AbsoluteUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(parsingResult);

      // Assert
      expect(result).toBe(true);
    });

    test('should return true if uri contains scheme, authority, path, query and no fragment', () => {
      // Arrange
      const scheme = 'http';
      const firstLevelDomain = 'firstdomain';
      const secondLevelDomain = 'seconddomain';
      const thirdLevelDomain = 'thirddomain';
      const authority = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;
      const path = '/one/two/three/';
      const query = 'next=four&last=five';

      const uri = `${scheme}://${authority}${path}?${query}`;

      const parser = new UriReferenceParser();
      const parsingResult = parser.parse(uri);

      const instance = new AbsoluteUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(parsingResult);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if uri contains scheme, authority, path, query and fragment', () => {
      // Arrange
      const scheme = 'http';
      const firstLevelDomain = 'firstdomain';
      const secondLevelDomain = 'seconddomain';
      const thirdLevelDomain = 'thirddomain';
      const authority = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;
      const path = '/one/two/three/';
      const query = 'next=four&last=five';
      const fragment = 'theend';

      const uri = `${scheme}://${authority}${path}?${query}#${fragment}`;

      const parser = new UriReferenceParser();
      const parsingResult = parser.parse(uri);

      const instance = new AbsoluteUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(parsingResult);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if uri does not contains scheme', () => {
      // Arrange
      const firstLevelDomain = 'firstdomain';
      const secondLevelDomain = 'seconddomain';
      const thirdLevelDomain = 'thirddomain';
      const authority = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;
      const path = '/one/two/three/';
      const query = 'next=four&last=five';

      const uri = `//${authority}${path}?${query}`;

      const parser = new UriReferenceParser();
      const parsingResult = parser.parse(uri);

      const instance = new AbsoluteUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(parsingResult);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if uri does not contains authority', () => {
      // Arrange
      const scheme = 'http';
      const path = '/one/two/three/';
      const query = 'next=four&last=five';
      const fragment = 'theend';

      const uri = `${scheme}:${path}?${query}#${fragment}`;

      const parser = new UriReferenceParser();
      const parsingResult = parser.parse(uri);

      const instance = new AbsoluteUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(parsingResult);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if uri does not contains authority and scheme ', () => {
      // Arrange
      const path = '/one/two/three/';
      const query = 'next=four&last=five';
      const fragment = 'theend';

      const uri = `${path}?${query}#${fragment}`;

      const parser = new UriReferenceParser();
      const parsingResult = parser.parse(uri);

      const instance = new AbsoluteUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(parsingResult);

      // Assert
      expect(result).toBe(false);
    });
  });
});
