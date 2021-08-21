import { CompositeSpecification, Specification } from '@bh2old/ddd-expc';
import {
  ManyGrantTypeVariantsSpecification,
  GrantTypeVariants,
} from '../../../../grant-type';
import { IClientMetadataCreateValues } from '../../../models';
import { ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification } from '../response-type-variants-to-grant-type-variants-correspondence-specification';

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

  private readonly _responseTypeVariantsToGrantTypeVariantsCorrespondence =
    new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification();

  isSatisfiedBy(candidate: IClientMetadataCreateValues): boolean {
    return this._undefinedGrantTypeVariants
      .or(this._createManyVariantsGrantType)
      .and(this._responseTypeVariantsToGrantTypeVariantsCorrespondence)
      .isSatisfiedBy(candidate);
  }
}
