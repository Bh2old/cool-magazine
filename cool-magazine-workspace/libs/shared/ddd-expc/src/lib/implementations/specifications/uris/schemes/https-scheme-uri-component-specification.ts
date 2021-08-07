import {
  CompositeSpecification,
  ISchemeUriComponent,
} from '@bh2old/ddd-expc/abstractions';
import { SchemeUriComponentSpecification } from './scheme-uri-component-specification';

type HttpsSchemeCandidate = ISchemeUriComponent | string;

export class HttpsSchemeUriComponentSpecification extends CompositeSpecification<HttpsSchemeCandidate> {
  private readonly _isCaseSensitive: boolean;
  private readonly _schemeUriComponentSpecification: SchemeUriComponentSpecification;

  constructor(isCaseSensitive = false) {
    super();
    this._isCaseSensitive = isCaseSensitive;
    this._schemeUriComponentSpecification = new SchemeUriComponentSpecification(
      'https',
      this._isCaseSensitive
    );
  }

  isSatisfiedBy(candidate: HttpsSchemeCandidate): boolean {
    return this._schemeUriComponentSpecification.isSatisfiedBy(candidate);
  }
}
