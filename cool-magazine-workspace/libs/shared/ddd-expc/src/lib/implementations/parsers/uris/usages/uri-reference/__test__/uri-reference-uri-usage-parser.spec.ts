import {
  IUriReferenceUriUsageParser,
  IUriReferenceUriUsageParsingResult,
} from '@bh2old/ddd-expc/abstractions';
import { UriReferenceUriUsageParser } from '../uri-reference-uri-usage-parser';

describe('UriReferenceUriUsageParser', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new UriReferenceUriUsageParser();

      // Assert
      expect(instance).toBeInstanceOf(UriReferenceUriUsageParser);
    });
  });

  describe('parsing', () => {
    test('should return full parsing result if uri contains full structure', () => {
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

      const parser: IUriReferenceUriUsageParser =
        new UriReferenceUriUsageParser();
      const expected: IUriReferenceUriUsageParsingResult = {
        scheme,
        authority,
        path,
        query,
        fragment,
      };

      // Act
      const result = parser.parse(uri);

      // Assert
      expect(result).toStrictEqual(expected);
    });

    describe('when optional parts are not specified', () => {
      test('should return everything except schema if uri does not contain schema', () => {
        // Arrange
        const firstLevelDomain = 'firstdomain';
        const secondLevelDomain = 'seconddomain';
        const thirdLevelDomain = 'thirddomain';
        const authority = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;
        const path = '/one/two/three/';
        const query = 'next=four&last=five';
        const fragment = 'theend';

        const uri = `//${authority}${path}?${query}#${fragment}`;

        const parser: IUriReferenceUriUsageParser =
          new UriReferenceUriUsageParser();
        const expected: IUriReferenceUriUsageParsingResult = {
          scheme: undefined,
          authority,
          path,
          query,
          fragment,
        };

        // Act
        const result = parser.parse(uri);

        // Assert
        expect(result).toStrictEqual(expected);
      });

      test('should return everything except query if uri does not contain query', () => {
        // Arrange
        const scheme = 'http';
        const firstLevelDomain = 'firstdomain';
        const secondLevelDomain = 'seconddomain';
        const thirdLevelDomain = 'thirddomain';
        const authority = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;
        const path = '/one/two/three/';
        const fragment = 'theend';

        const uri = `${scheme}://${authority}${path}#${fragment}`;

        const parser: IUriReferenceUriUsageParser =
          new UriReferenceUriUsageParser();
        const expected: IUriReferenceUriUsageParsingResult = {
          scheme,
          authority,
          path,
          query: undefined,
          fragment,
        };

        // Act
        const result = parser.parse(uri);

        // Assert
        expect(result).toStrictEqual(expected);
      });

      test('should return everything except fragment if uri does not contain fragment', () => {
        // Arrange
        const scheme = 'http';
        const firstLevelDomain = 'firstdomain';
        const secondLevelDomain = 'seconddomain';
        const thirdLevelDomain = 'thirddomain';
        const authority = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;
        const path = '/one/two/three/';
        const query = 'next=four&last=five';

        const uri = `${scheme}://${authority}${path}?${query}`;

        const parser: IUriReferenceUriUsageParser =
          new UriReferenceUriUsageParser();
        const expected: IUriReferenceUriUsageParsingResult = {
          scheme,
          authority,
          path,
          query,
          fragment: undefined,
        };

        // Act
        const result = parser.parse(uri);

        // Assert
        expect(result).toStrictEqual(expected);
      });
    });
  });
});
