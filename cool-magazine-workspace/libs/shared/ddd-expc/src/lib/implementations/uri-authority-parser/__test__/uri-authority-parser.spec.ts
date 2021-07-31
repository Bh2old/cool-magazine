import {
  IAuthorityUriComponent,
  IUriAuthorityParser,
  IUriAuthorityParsingResult,
} from '../../../abstractions';
import { UriAuthorityParser } from '../uri-authority-parser';

describe('UriAuthorityParser', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new UriAuthorityParser();

      // Assert
      expect(instance).toBeInstanceOf(UriAuthorityParser);
    });
  });

  describe('parsing', () => {
    test('should return full parsing result if authority contains full structure', () => {
      // Arrange
      const userInfo = 'login:password';

      const firstLevelDomain = 'firstdomain';
      const secondLevelDomain = 'seconddomain';
      const thirdLevelDomain = 'thirddomain';
      const host = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;

      const port = 88;

      const authority = `${userInfo}@${host}:${port}`;

      const authorityUriComponent: IAuthorityUriComponent = {
        authority,
      };

      const parser: IUriAuthorityParser = new UriAuthorityParser();

      const expected: IUriAuthorityParsingResult = {
        userInfo,
        host,
        port,
      };

      // Act
      const result = parser.parse(authorityUriComponent);

      // Assert
      expect(result).toStrictEqual(expected);
    });

    describe('when optional parts are not specified', () => {
      test('should return everything except user info if authority does not contain user info', () => {
        // Arrange
        const firstLevelDomain = 'firstdomain';
        const secondLevelDomain = 'seconddomain';
        const thirdLevelDomain = 'thirddomain';
        const host = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;

        const port = 88;

        const authority = `${host}:${port}`;

        const authorityUriComponent: IAuthorityUriComponent = {
          authority,
        };

        const parser: IUriAuthorityParser = new UriAuthorityParser();

        const expected: IUriAuthorityParsingResult = {
          userInfo: undefined,
          host,
          port,
        };

        // Act
        const result = parser.parse(authorityUriComponent);

        // Assert
        expect(result).toStrictEqual(expected);
      });

      test('should return everything except port if authority does not contain port', () => {
        // Arrange
        const userInfo = 'login:password';

        const firstLevelDomain = 'firstdomain';
        const secondLevelDomain = 'seconddomain';
        const thirdLevelDomain = 'thirddomain';
        const host = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;

        const authority = `${userInfo}@${host}`;

        const authorityUriComponent: IAuthorityUriComponent = {
          authority,
        };

        const parser: IUriAuthorityParser = new UriAuthorityParser();

        const expected: IUriAuthorityParsingResult = {
          userInfo,
          host,
          port: undefined,
        };

        // Act
        const result = parser.parse(authorityUriComponent);

        // Assert
        expect(result).toStrictEqual(expected);
      });

      test('should return only host if authority does not contain user info and port', () => {
        // Arrange
        const firstLevelDomain = 'firstdomain';
        const secondLevelDomain = 'seconddomain';
        const thirdLevelDomain = 'thirddomain';
        const host = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;

        const authority = `${host}`;

        const authorityUriComponent: IAuthorityUriComponent = {
          authority,
        };

        const parser: IUriAuthorityParser = new UriAuthorityParser();

        const expected: IUriAuthorityParsingResult = {
          userInfo: undefined,
          host,
          port: undefined,
        };

        // Act
        const result = parser.parse(authorityUriComponent);

        // Assert
        expect(result).toStrictEqual(expected);
      });
    });

    describe('check on basic variants of hosts', () => {
      describe('reg-name host', () => {
        test('should return full parsing result if authority contains full structure', () => {
          // Arrange
          const userInfo = 'login:password';

          const firstLevelDomain = 'firstdomain';
          const secondLevelDomain = 'seconddomain';
          const thirdLevelDomain = 'thirddomain';
          const host = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;

          const port = 88;

          const authority = `${userInfo}@${host}:${port}`;

          const authorityUriComponent: IAuthorityUriComponent = {
            authority,
          };

          const parser: IUriAuthorityParser = new UriAuthorityParser();

          const expected: IUriAuthorityParsingResult = {
            userInfo,
            host,
            port,
          };

          // Act
          const result = parser.parse(authorityUriComponent);

          // Assert
          expect(result).toStrictEqual(expected);
        });

        describe('when optional parts are not specified', () => {
          test('should return everything except user info if authority does not contain user info', () => {
            // Arrange
            const firstLevelDomain = 'firstdomain';
            const secondLevelDomain = 'seconddomain';
            const thirdLevelDomain = 'thirddomain';
            const host = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;

            const port = 88;

            const authority = `${host}:${port}`;

            const authorityUriComponent: IAuthorityUriComponent = {
              authority,
            };

            const parser: IUriAuthorityParser = new UriAuthorityParser();

            const expected: IUriAuthorityParsingResult = {
              userInfo: undefined,
              host,
              port,
            };

            // Act
            const result = parser.parse(authorityUriComponent);

            // Assert
            expect(result).toStrictEqual(expected);
          });

          test('should return everything except port if authority does not contain port', () => {
            // Arrange
            const userInfo = 'login:password';

            const firstLevelDomain = 'firstdomain';
            const secondLevelDomain = 'seconddomain';
            const thirdLevelDomain = 'thirddomain';
            const host = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;

            const authority = `${userInfo}@${host}`;

            const authorityUriComponent: IAuthorityUriComponent = {
              authority,
            };

            const parser: IUriAuthorityParser = new UriAuthorityParser();

            const expected: IUriAuthorityParsingResult = {
              userInfo,
              host,
              port: undefined,
            };

            // Act
            const result = parser.parse(authorityUriComponent);

            // Assert
            expect(result).toStrictEqual(expected);
          });

          test('should return only host if authority does not contain user info and port', () => {
            // Arrange

            const firstLevelDomain = 'firstdomain';
            const secondLevelDomain = 'seconddomain';
            const thirdLevelDomain = 'thirddomain';
            const host = `${thirdLevelDomain}.${secondLevelDomain}.${firstLevelDomain}`;

            const authority = `${host}`;

            const authorityUriComponent: IAuthorityUriComponent = {
              authority,
            };

            const parser: IUriAuthorityParser = new UriAuthorityParser();

            const expected: IUriAuthorityParsingResult = {
              userInfo: undefined,
              host,
              port: undefined,
            };

            // Act
            const result = parser.parse(authorityUriComponent);

            // Assert
            expect(result).toStrictEqual(expected);
          });
        });
      });

      describe('"[" ( IPv6address / IPvFuture  ) "]" host', () => {
        test('should return full parsing result if authority contains full structure', () => {
          // Arrange
          const userInfo = 'login:password';

          const host = `[2001:db8::7]`;

          const port = 88;

          const authority = `${userInfo}@${host}:${port}`;

          const authorityUriComponent: IAuthorityUriComponent = {
            authority,
          };

          const parser: IUriAuthorityParser = new UriAuthorityParser();

          const expected: IUriAuthorityParsingResult = {
            userInfo,
            host,
            port,
          };

          // Act
          const result = parser.parse(authorityUriComponent);

          // Assert
          expect(result).toStrictEqual(expected);
        });

        describe('when optional parts are not specified', () => {
          test('should return everything except user info if authority does not contain user info', () => {
            // Arrange
            const host = `[2001:db8::7]`;

            const port = 88;

            const authority = `${host}:${port}`;

            const authorityUriComponent: IAuthorityUriComponent = {
              authority,
            };

            const parser: IUriAuthorityParser = new UriAuthorityParser();

            const expected: IUriAuthorityParsingResult = {
              userInfo: undefined,
              host,
              port,
            };

            // Act
            const result = parser.parse(authorityUriComponent);

            // Assert
            expect(result).toStrictEqual(expected);
          });

          test('should return everything except port if authority does not contain port', () => {
            // Arrange
            const userInfo = 'login:password';

            const host = `[2001:db8::7]`;

            const authority = `${userInfo}@${host}`;

            const authorityUriComponent: IAuthorityUriComponent = {
              authority,
            };

            const parser: IUriAuthorityParser = new UriAuthorityParser();

            const expected: IUriAuthorityParsingResult = {
              userInfo,
              host,
              port: undefined,
            };

            // Act
            const result = parser.parse(authorityUriComponent);

            // Assert
            expect(result).toStrictEqual(expected);
          });

          test('should return only host if authority does not contain user info and port', () => {
            // Arrange
            const host = `[2001:db8::7]`;

            const authority = `${host}`;

            const authorityUriComponent: IAuthorityUriComponent = {
              authority,
            };

            const parser: IUriAuthorityParser = new UriAuthorityParser();

            const expected: IUriAuthorityParsingResult = {
              userInfo: undefined,
              host,
              port: undefined,
            };

            // Act
            const result = parser.parse(authorityUriComponent);

            // Assert
            expect(result).toStrictEqual(expected);
          });
        });
      });

      describe('IPv4address host', () => {
        test('should return full parsing result if authority contains full structure', () => {
          // Arrange
          const userInfo = 'login:password';

          const host = `192.0.2.16`;

          const port = 88;

          const authority = `${userInfo}@${host}:${port}`;

          const authorityUriComponent: IAuthorityUriComponent = {
            authority,
          };

          const parser: IUriAuthorityParser = new UriAuthorityParser();

          const expected: IUriAuthorityParsingResult = {
            userInfo,
            host,
            port,
          };

          // Act
          const result = parser.parse(authorityUriComponent);

          // Assert
          expect(result).toStrictEqual(expected);
        });

        describe('when optional parts are not specified', () => {
          test('should return everything except user info if authority does not contain user info', () => {
            // Arrange
            const host = `192.0.2.16`;

            const port = 88;

            const authority = `${host}:${port}`;

            const authorityUriComponent: IAuthorityUriComponent = {
              authority,
            };

            const parser: IUriAuthorityParser = new UriAuthorityParser();

            const expected: IUriAuthorityParsingResult = {
              userInfo: undefined,
              host,
              port,
            };

            // Act
            const result = parser.parse(authorityUriComponent);

            // Assert
            expect(result).toStrictEqual(expected);
          });

          test('should return everything except port if authority does not contain port', () => {
            // Arrange
            const userInfo = 'login:password';

            const host = `192.0.2.16`;

            const authority = `${userInfo}@${host}`;

            const authorityUriComponent: IAuthorityUriComponent = {
              authority,
            };

            const parser: IUriAuthorityParser = new UriAuthorityParser();

            const expected: IUriAuthorityParsingResult = {
              userInfo,
              host,
              port: undefined,
            };

            // Act
            const result = parser.parse(authorityUriComponent);

            // Assert
            expect(result).toStrictEqual(expected);
          });

          test('should return only host if authority does not contain user info and port', () => {
            // Arrange
            const host = `192.0.2.16`;

            const authority = `${host}`;

            const authorityUriComponent: IAuthorityUriComponent = {
              authority,
            };

            const parser: IUriAuthorityParser = new UriAuthorityParser();

            const expected: IUriAuthorityParsingResult = {
              userInfo: undefined,
              host,
              port: undefined,
            };

            // Act
            const result = parser.parse(authorityUriComponent);

            // Assert
            expect(result).toStrictEqual(expected);
          });
        });
      });
    });
  });
});
