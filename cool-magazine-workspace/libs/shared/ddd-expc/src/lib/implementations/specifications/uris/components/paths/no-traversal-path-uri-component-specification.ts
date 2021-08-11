import {
  CompositeSpecification,
  IPathUriComponent,
} from '@bh2old/ddd-expc/abstractions';

type NoTraversalPathUriComponentCandidate = IPathUriComponent | string;

export class NoTraversalPathUriComponentSpecification extends CompositeSpecification<NoTraversalPathUriComponentCandidate> {
  private readonly _traversalSymbolVariants: {
    readonly [keu: string]: string;
  } = {
    // [encode]: decode
    '../': '../',
    '/..': '/..',
    '..\\': '..\\',
    '\\..': '\\..',
    '..%252f': '../',
    '%252f..': '/..',
    '..%c0%af': '../',
    '%c0%af..': '/..',
    '%2e%2e%2f': '../',
    '%2f%2e%2e': '/..',
    '%2e%2e/': '../',
    '/%2e%2e': '/..',
    '..%c1%9c': '..\\',
    '%c1%9c..': '\\..',
    '%2e%2e%5c': '..\\',
    '%5c%2e%2e': '\\..',
    '%2e%2e\\': '..\\',
    '\\%2e%2e': '\\..',
    '..%5c': '..\\',
    '%5c..': '\\..',
    '%252e%252e%255c': '..\\',
    '%255c%252e%252e': '\\..',
    '..%255c': '..\\',
    '%255c..': '\\..',
    '%00': 'null bytes',
  } as const;
  public get traversalSymbolVariants() {
    return [...Object.keys(this._traversalSymbolVariants)] as const;
  }

  isSatisfiedBy(candidate: NoTraversalPathUriComponentCandidate): boolean {
    const path = typeof candidate === 'object' ? candidate.path : candidate;

    return !this._checkForTraversalExisting(path);
  }

  private _checkForTraversalExisting(text: string) {
    for (const variant of this.traversalSymbolVariants) {
      const foundTraversalSymbolsPosition = text.indexOf(variant);
      if (foundTraversalSymbolsPosition >= 0) {
        return true;
      }
    }
    return false;
  }
}
