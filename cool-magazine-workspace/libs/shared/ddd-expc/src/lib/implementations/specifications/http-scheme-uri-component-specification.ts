import {
  CompositeSpecification,
  ISchemeUriComponent,
} from '../../abstractions';
import { SchemeUriComponentSpecification } from './scheme-uri-component-specification';

type HttpSchemeCandidate = ISchemeUriComponent | string;

export class HttpSchemeUriComponentSpecification extends CompositeSpecification<HttpSchemeCandidate> {
  private readonly _isCaseSensitive: boolean;
  private readonly _schemeUriComponentSpecification: SchemeUriComponentSpecification;

  constructor(isCaseSensitive = false) {
    super();
    this._isCaseSensitive = isCaseSensitive;
    this._schemeUriComponentSpecification = new SchemeUriComponentSpecification(
      'http',
      this._isCaseSensitive
    );
  }

  isSatisfiedBy(candidate: HttpSchemeCandidate): boolean {
    return this._schemeUriComponentSpecification.isSatisfiedBy(candidate);
  }
}
