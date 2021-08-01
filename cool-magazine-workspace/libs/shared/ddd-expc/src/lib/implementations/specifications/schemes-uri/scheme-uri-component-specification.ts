import {
  CompositeSpecification,
  ISchemeUriComponent,
} from '../../../abstractions';

type SchemeUriComponentCandidate = ISchemeUriComponent | string;

export class SchemeUriComponentSpecification extends CompositeSpecification<SchemeUriComponentCandidate> {
  private readonly _scheme: string;
  private readonly _isCaseSensitive: boolean;

  constructor(requiredScheme: string, isCaseSensitive = false) {
    super();
    this._scheme = requiredScheme;
    this._isCaseSensitive = isCaseSensitive;
  }

  isSatisfiedBy(candidate: SchemeUriComponentCandidate): boolean {
    const isObjectTypeCandidate = typeof candidate === 'object';

    if (
      isObjectTypeCandidate &&
      (candidate as ISchemeUriComponent).scheme === undefined
    ) {
      return false;
    }

    const scheme = isObjectTypeCandidate
      ? ((candidate as ISchemeUriComponent).scheme as string)
      : (candidate as string);

    return this._isCaseSensitive
      ? scheme === this._scheme
      : this._getNotCaseSensitiveString(scheme) ===
          this._getNotCaseSensitiveString(this._scheme);
  }

  private _getNotCaseSensitiveString(value: string) {
    return value.toUpperCase();
  }
}
