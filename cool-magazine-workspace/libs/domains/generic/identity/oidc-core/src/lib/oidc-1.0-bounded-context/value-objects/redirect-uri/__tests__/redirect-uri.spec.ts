import { RedirectUri } from '../redirect-uri.value-object';

describe('RedirectUri', () => {
  describe('instance creation', () => {
    describe('single instance', () => {
      test('should return instance of RedirectUri', () => {
        // Arrange
        const params = 'RedirectUri';

        // Act
        const instance = RedirectUri.create(params);

        // Assert
        expect(instance).toBeInstanceOf(RedirectUri);
      });
    });

    describe('many different instances', () => {
      test('should return collection of RedirectUris from collection of variants', () => {
        // Arrange
        const uri = 'http://asd.qwe/';
        const uris = new Set<string>().add(uri);
        const expected = [RedirectUri.create(uri)];
        // Act
        const instances = RedirectUri.createMany(uris);

        // Assert
        expect(instances).toStrictEqual(expected);
      });
    });
  });
});
