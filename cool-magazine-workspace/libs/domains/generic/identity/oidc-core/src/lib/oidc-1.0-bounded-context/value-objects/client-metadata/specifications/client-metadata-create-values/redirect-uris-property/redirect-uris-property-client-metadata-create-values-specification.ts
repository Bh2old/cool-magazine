import { CompositeSpecification } from '@bh2old/ddd-expc';
import { ManyRedirectUriVariantsSpecification } from '../../../../redirect-uri';
import { IClientMetadataCreateValues } from '../../../models';

export class RedirectUrisPropertyClientMetadataCreateValuesSpecification extends CompositeSpecification<IClientMetadataCreateValues> {
  private readonly _manyRedirectUriVariantsSpecification =
    new ManyRedirectUriVariantsSpecification();

  isSatisfiedBy(candidate: IClientMetadataCreateValues): boolean {
    return this._manyRedirectUriVariantsSpecification.isSatisfiedBy(
      candidate.redirectUris
    );
  }
}
