import { IPV6HostUriAuthoritySpecification } from '../../../hosts-uri';

describe('IPV6HostUriAuthoritySpecification', () => {
  function generateCases(h16: string, ls32DoubleH16: string, ls32Ipv4: string) {
    return {
      ...generateCaseVariants(h16, ls32DoubleH16, ls32Ipv4, false, 6),
      ...generateCaseVariants(h16, ls32DoubleH16, ls32Ipv4, true, 5),
      ...generateCaseVariants(h16, ls32DoubleH16, ls32Ipv4, true, 4, true),
      ...generateCaseVariants(h16, ls32DoubleH16, ls32Ipv4, true, 3, true, 1),
      ...generateCaseVariants(h16, ls32DoubleH16, ls32Ipv4, true, 2, true, 2),
      ...generateCaseVariants(h16, ls32DoubleH16, ls32Ipv4, true, 1, true, 3),
      ...generateCaseVariants(h16, ls32DoubleH16, ls32Ipv4, true, 0, true, 4),
      ...generateCaseVariants(h16, ls32DoubleH16, ls32Ipv4, true, -1, true, 5),
      ...generateCaseVariants(h16, ls32DoubleH16, ls32Ipv4, true, -2, true, 6),
    } as const;
  }

  function generateCaseVariants(
    h16: string,
    ls32DoubleH16: string,
    ls32Ipv4: string,
    isHasDoubleColon: boolean,
    countRightH16: number,
    isHasOptionalLeftPart = false,
    countRepeatedLeftH16 = 0
  ) {
    const doubleColon = '::';
    const result: { [key: string]: string } = {};
    const rightParts = {
      withLs32AsDoubleH16: getRightPart(h16, ls32DoubleH16, countRightH16),
      withLs32AsIpv4: getRightPart(h16, ls32Ipv4, countRightH16),
    };

    if (!isHasDoubleColon) {
      result[`${countRightH16}(h16:)h16:h16`] = rightParts.withLs32AsDoubleH16;

      result[`${countRightH16}(h16:)ipv4`] = rightParts.withLs32AsIpv4;

      return result;
    }

    addRightPartsWhenNoLeft();

    if (!isHasOptionalLeftPart) {
      return result;
    }

    addRightAndLeftPartsWhenLeftOnlyH16();

    if (countRepeatedLeftH16 === 0) {
      return result;
    }

    for (let count = 1; count <= countRepeatedLeftH16; count++) {
      addRightAndLeftPartsWhenLeftHasMultipleH16(count);
    }

    return result;

    function addRightAndLeftPartsWhenLeftHasMultipleH16(
      countRepeatedH16: number
    ) {
      if (countRightH16 === -2) {
        result[`${countRepeatedH16}(h16:)h16::`] =
          getLeftPart(h16, countRepeatedH16) +
          doubleColon +
          rightParts.withLs32AsDoubleH16;
      }

      if (countRightH16 === -1) {
        result[`${countRepeatedH16}(h16:)h16::h16`] =
          getLeftPart(h16, countRepeatedH16) +
          doubleColon +
          rightParts.withLs32AsDoubleH16;
      }

      if (countRightH16 === 0) {
        result[`${countRepeatedH16}(h16:)h16::h16:h16`] =
          getLeftPart(h16, countRepeatedH16) +
          doubleColon +
          rightParts.withLs32AsDoubleH16;

        result[`${countRepeatedH16}(h16:)h16::ipv4`] =
          getLeftPart(h16, countRepeatedH16) +
          doubleColon +
          rightParts.withLs32AsIpv4;
      }

      if (countRightH16 > 0) {
        result[`${countRepeatedH16}(h16:)h16::${countRightH16}(h16:)h16:h16`] =
          getLeftPart(h16, countRepeatedH16) +
          doubleColon +
          rightParts.withLs32AsDoubleH16;

        result[`${countRepeatedH16}(h16:)h16::${countRightH16}(h16:)ipv4`] =
          getLeftPart(h16, countRepeatedH16) +
          doubleColon +
          rightParts.withLs32AsIpv4;
      }
    }

    function addRightAndLeftPartsWhenLeftOnlyH16() {
      if (countRightH16 === -2) {
        result[`h16::`] = h16 + doubleColon + rightParts.withLs32AsDoubleH16;
      }

      if (countRightH16 === -1) {
        result[`h16::h16`] = h16 + doubleColon + rightParts.withLs32AsDoubleH16;
      }

      if (countRightH16 === 0) {
        result[`h16::h16:h16`] =
          h16 + doubleColon + rightParts.withLs32AsDoubleH16;

        result[`h16::ipv4`] = h16 + doubleColon + rightParts.withLs32AsIpv4;
      }

      if (countRightH16 > 0) {
        result[`h16::${countRightH16}(h16:)h16:h16`] =
          h16 + doubleColon + rightParts.withLs32AsDoubleH16;

        result[`h16::${countRightH16}(h16:)ipv4`] =
          h16 + doubleColon + rightParts.withLs32AsIpv4;
      }
    }

    function addRightPartsWhenNoLeft() {
      if (countRightH16 === -2) {
        result[`::`] = doubleColon + rightParts.withLs32AsDoubleH16;
      }

      if (countRightH16 === -1) {
        result[`::h16`] = doubleColon + rightParts.withLs32AsDoubleH16;
      }

      if (countRightH16 === 0) {
        result[`::h16:h16`] = doubleColon + rightParts.withLs32AsDoubleH16;

        result[`::ipv4`] = doubleColon + rightParts.withLs32AsIpv4;
      }

      if (countRightH16 > 0) {
        result[`::${countRightH16}(h16:)h16:h16`] =
          doubleColon + rightParts.withLs32AsDoubleH16;

        result[`::${countRightH16}(h16:)ipv4`] =
          doubleColon + rightParts.withLs32AsIpv4;
      }
    }
  }

  function getLeftPart(h16: string, countRepeatedH16: number) {
    let result = getMultipleH16(h16, countRepeatedH16);
    result += h16;

    return result;
  }

  function getRightPart(h16: string, ls32: string, countH16: number) {
    if (countH16 === -2) {
      return '';
    }
    if (countH16 === -1) {
      return h16;
    }

    let result = getMultipleH16(h16, countH16);
    result += ls32;

    return result;
  }

  function getMultipleH16(h16: string, count: number) {
    let result = '';
    for (let index = 0; index < count; index++) {
      result += `${h16}:`;
    }

    return result;
  }

  describe('instance creation', () => {
    test('should return instance', () => {
      // Arrange
      // Act
      const instance = new IPV6HostUriAuthoritySpecification();

      // Assert
      expect(instance).toBeInstanceOf(IPV6HostUriAuthoritySpecification);
    });
  });

  describe('check requirements', () => {
    describe('on basic ipv6 cases in rfc3986', () => {
      test('should return true for all generated ipv6 because h16 and ipv4 are valid', () => {
        // Arrange
        const h16 = '1234';
        const ipv4 = `1.2.3.4`;
        const ls32DoubleH16 = `${h16}:${h16}`;
        const ls32Ipv4 = ipv4;
        const cases = generateCases(h16, ls32DoubleH16, ls32Ipv4);
        const instance = new IPV6HostUriAuthoritySpecification();
        type Results = { [key: string]: { ipv6: string; result: boolean } };
        const results: Results = {};

        const expected: Results = {};

        for (const key in cases) {
          if (Object.prototype.hasOwnProperty.call(cases, key)) {
            const ipv6 = `[${cases[key]}]`;
            expected[key] = { ipv6: ipv6, result: true };
          }
        }

        // Act
        for (const key in cases) {
          if (Object.prototype.hasOwnProperty.call(cases, key)) {
            const ipv6 = `[${cases[key]}]`;
            results[key] = { ipv6: ipv6, result: instance.isSatisfiedBy(ipv6) };
          }
        }

        // Assert
        expect(results).toStrictEqual(expected);
      });

      test('should return false for all generated ipv6 where h16 contains no hex digits and return true if only valid ipv4 is present', () => {
        // Arrange
        const h16 = 'zzzz';
        const ipv4 = `1.2.3.4`;
        const ls32DoubleH16 = `${h16}:${h16}`;
        const ls32Ipv4 = ipv4;
        const cases = generateCases(h16, ls32DoubleH16, ls32Ipv4);
        const instance = new IPV6HostUriAuthoritySpecification();
        type Results = { [key: string]: { ipv6: string; result: boolean } };
        const results: Results = {};

        const expected: Results = {};

        for (const key in cases) {
          if (Object.prototype.hasOwnProperty.call(cases, key)) {
            const ipv6 = `[${cases[key]}]`;
            expected[key] = { ipv6: ipv6, result: false };
          }
        }

        expected['::'] = { ipv6: `[::]`, result: true };
        expected['::ipv4'] = { ipv6: `[::${ipv4}]`, result: true };

        // Act
        for (const key in cases) {
          if (Object.prototype.hasOwnProperty.call(cases, key)) {
            const ipv6 = `[${cases[key]}]`;
            results[key] = { ipv6: ipv6, result: instance.isSatisfiedBy(ipv6) };
          }
        }

        // Assert
        expect(results).toStrictEqual(expected);
      });

      test('should return false for all generated ipv6 where ipv4 is invalid and return true if only valid ipv6s is present', () => {
        // Arrange
        const h16 = 'a2b4';
        const ipv4 = `1.2.3.4.5`;
        const ls32DoubleH16 = `${h16}:${h16}`;
        const ls32Ipv4 = ipv4;
        const cases = generateCases(h16, ls32DoubleH16, ls32Ipv4);
        const instance = new IPV6HostUriAuthoritySpecification();
        type Results = { [key: string]: { ipv6: string; result: boolean } };
        const results: Results = {};

        const expected: Results = {};

        for (const key in cases) {
          if (Object.prototype.hasOwnProperty.call(cases, key)) {
            const isContainsIPV4 =
              key.substring(key.length - 4, key.length) === 'ipv4';

            const ipv6 = `[${cases[key]}]`;

            expected[key] = { ipv6: ipv6, result: !isContainsIPV4 };
          }
        }

        // Act
        for (const key in cases) {
          if (Object.prototype.hasOwnProperty.call(cases, key)) {
            const ipv6 = `[${cases[key]}]`;
            results[key] = { ipv6: ipv6, result: instance.isSatisfiedBy(ipv6) };
          }
        }

        // Assert
        expect(results).toStrictEqual(expected);
      });

      test('should return false for all generated ipv6 if h16 and ipv4 are invalid', () => {
        // Arrange
        const h16 = 'z';
        const ipv4 = `a.2.3.4`;
        const ls32DoubleH16 = `${h16}:${h16}`;
        const ls32Ipv4 = ipv4;
        const cases = generateCases(h16, ls32DoubleH16, ls32Ipv4);
        const instance = new IPV6HostUriAuthoritySpecification();
        type Results = { [key: string]: { ipv6: string; result: boolean } };
        const results: Results = {};

        const expected: Results = {};

        for (const key in cases) {
          if (Object.prototype.hasOwnProperty.call(cases, key)) {
            const ipv6 = `[${cases[key]}]`;

            expected[key] = { ipv6: ipv6, result: false };
          }
        }
        expected['::'] = { ipv6: `[::]`, result: true };

        // Act
        for (const key in cases) {
          if (Object.prototype.hasOwnProperty.call(cases, key)) {
            const ipv6 = `[${cases[key]}]`;
            results[key] = { ipv6: ipv6, result: instance.isSatisfiedBy(ipv6) };
          }
        }

        // Assert
        expect(results).toStrictEqual(expected);
      });
    });
  });
});
