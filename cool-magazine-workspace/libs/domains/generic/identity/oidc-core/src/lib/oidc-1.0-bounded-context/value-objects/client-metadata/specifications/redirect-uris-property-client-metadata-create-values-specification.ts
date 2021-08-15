import { CompositeSpecification } from '@bh2old/ddd-expc';
import { CreateManyUrisRedirectUriSpecification } from '../../redirect-uri';
import { IClientMetadataCreateValues } from '../models';

export class RedirectUrisPropertyClientMetadataCreateValuesSpecification extends CompositeSpecification<IClientMetadataCreateValues> {
  private readonly _createManyUrisRedirectUriSpecification =
    new CreateManyUrisRedirectUriSpecification();

  isSatisfiedBy(candidate: IClientMetadataCreateValues): boolean {
    return this._createManyUrisRedirectUriSpecification.isSatisfiedBy(
      candidate.redirectUris
    );
  }
}
