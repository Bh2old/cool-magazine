import { RegNameUrlSpecification } from '../../../hosts-uri';

describe('RegNameUrlSpecification', () => {
  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new RegNameUrlSpecification();

      // Assert
      expect(instance).toBeInstanceOf(RegNameUrlSpecification);
    });
  });
  describe('check requirements', () => {
    test('should return true if reg-name is valid and no punycode', () => {
      // Arrange
      const domain = '123.4-four.domain.dom';
      const instance = new RegNameUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(domain);

      // Assert
      expect(result).toBe(true);
    });

    test('should return true if reg-name is valid and contains punycode', () => {
      // Arrange
      const domain = 'xn--90aga7a7b.xn--b1aew.xn--p1ai';
      const instance = new RegNameUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(domain);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false if domain or subdomains contain more than 63 characters', () => {
      // Arrange
      let subdomain = '';
      const maxSymbols = 63;
      const moreThenMaxSymbols = maxSymbols + 1;

      for (let index = 0; index < moreThenMaxSymbols; index++) {
        subdomain += index;
      }
      const domain = subdomain + '.dom';
      const instance = new RegNameUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(domain);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if domain or subdomains do not contain characters', () => {
      // Arrange
      const domain = '.dom';
      const instance = new RegNameUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(domain);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if top domain contains more than 63 characters', () => {
      // Arrange
      let topDomain = '';
      const maxSymbols = 63;
      const moreThenMaxSymbols = maxSymbols + 1;

      for (let index = 0; index < moreThenMaxSymbols; index++) {
        topDomain += index;
      }
      const domain = 'subdom.' + topDomain;
      const instance = new RegNameUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(domain);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if top domain contains less then 2 characters', () => {
      // Arrange
      const domain = 'subdom.d';
      const instance = new RegNameUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(domain);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if domain or subdomains contain "-" at the beginning of the segment', () => {
      // Arrange
      const subDomain = '-subdom.dom';
      const instance = new RegNameUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(subDomain);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if domain or subdomains contain "-" at end of the segment', () => {
      // Arrange
      const subDomain = 'subdom.domain-.dom';
      const instance = new RegNameUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(subDomain);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if top domain contain "-" at the beginning of the segment', () => {
      // Arrange
      const subDomain = 'subdom.-dom';
      const instance = new RegNameUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(subDomain);

      // Assert
      expect(result).toBe(false);
    });

    test('should return false if top domain contain "-" at end of the segment', () => {
      // Arrange
      const subDomain = 'subdom.dom-';
      const instance = new RegNameUrlSpecification();

      // Act
      const result = instance.isSatisfiedBy(subDomain);

      // Assert
      expect(result).toBe(false);
    });
  });
});
