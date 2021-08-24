import { CompositeSpecification, Specification } from '@bh2old/ddd-expc';
import {
  GrantTypeVariants,
  ManyGrantTypeVariantsSpecification,
} from '../../../../grant-type';
import { IClientMetadataCreateValues } from '../../../models';

export class GrantTypeVariantsPropertyClientMetadataCreateValuesSpecification extends CompositeSpecification<IClientMetadataCreateValues> {
  private readonly _createManyVariantsGrantType =
    new Specification<IClientMetadataCreateValues>(
      (candidate: IClientMetadataCreateValues) => {
        return new ManyGrantTypeVariantsSpecification().isSatisfiedBy(
          candidate.grantTypeVariants as Set<GrantTypeVariants>
        );
      }
    );

  private readonly _undefinedGrantTypeVariants =
    new Specification<IClientMetadataCreateValues>(
      (candidate: IClientMetadataCreateValues) => {
        return candidate.grantTypeVariants === undefined;
      }
    );

  isSatisfiedBy(candidate: IClientMetadataCreateValues): boolean {
    return this._undefinedGrantTypeVariants
      .or(this._createManyVariantsGrantType)
      .isSatisfiedBy(candidate);
  }
}
