import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { SingleRedirectUriVariantSpecificationCandidatesExample } from './single-redirect-uri-variant-specification-candidates-example';

export class ManyRedirectUriVariantsSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<Set<string>>
{
  private readonly _singleRedirectUriVariantSpecificationCandidatesExample =
    new SingleRedirectUriVariantSpecificationCandidatesExample();

  get valid() {
    return [this._singleRedirectUriVariantSpecificationCandidatesExample.valid];
  }

  get invalid() {
    return [
      new Set<string>(),
      this._singleRedirectUriVariantSpecificationCandidatesExample.invalid,
    ];
  }
}
