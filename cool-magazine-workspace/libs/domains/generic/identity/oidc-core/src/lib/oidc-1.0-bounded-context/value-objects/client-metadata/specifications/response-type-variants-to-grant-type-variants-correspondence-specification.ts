import { CompositeSpecification, Dictionary } from '@bh2old/ddd-expc';
import { GrantTypeVariants } from '../../grant-type';
import { ResponseTypeVariants } from '../../response-type';
import { IClientMetadataCreateValues } from '../models';

type ResponseTypeVariantsToGrantTypeVariantsCorrespondence = {
  readonly [variant in ResponseTypeVariants]: Set<GrantTypeVariants>;
};

export class ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification extends CompositeSpecification<IClientMetadataCreateValues> {
  private get _correspondence(): ResponseTypeVariantsToGrantTypeVariantsCorrespondence {
    return {
      get code() {
        return new Set<GrantTypeVariants>(['authorizationCode']);
      },
      get id_token() {
        return new Set<GrantTypeVariants>(['implicit']);
      },
      get 'token id_token'() {
        return new Set<GrantTypeVariants>(['authorizationCode', 'implicit']);
      },
      get 'code id_token'() {
        return new Set<GrantTypeVariants>(['authorizationCode', 'implicit']);
      },
      get 'code token'() {
        return new Set<GrantTypeVariants>(['authorizationCode', 'implicit']);
      },
      get 'code token id_token'() {
        return new Set<GrantTypeVariants>(['authorizationCode', 'implicit']);
      },
    };
  }

  static get DEFAULT_RESPONSE_TYPE_VARIANTS(): Iterable<ResponseTypeVariants> {
    return new Set<ResponseTypeVariants>(['code']);
  }

  static get DEFAULT_GRANT_TYPE_VARIANTS(): Iterable<GrantTypeVariants> {
    return new Set<GrantTypeVariants>(['authorizationCode']);
  }

  isSatisfiedBy(candidate: IClientMetadataCreateValues): boolean {
    const hasResponseTypeVariants =
      candidate.responseTypeVariants !== undefined;
    const hasGrantTypeVariants = candidate.grantTypeVariants !== undefined;

    if (!hasResponseTypeVariants && !hasGrantTypeVariants) {
      return true;
    }

    if (!hasGrantTypeVariants) {
      return this._checkResponseTypeVariantsToDefaultGrantTypeVariantCorrespondence(
        candidate.responseTypeVariants as Set<ResponseTypeVariants>
      );
    }

    const grantTypeVariants = new Dictionary<
      GrantTypeVariants,
      GrantTypeVariants
    >((candidate.grantTypeVariants as Set<GrantTypeVariants>).entries());

    if (!hasResponseTypeVariants) {
      return this._checkDefaultResponseTypeVariantsToGrantTypeVariantsCorrespondence(
        grantTypeVariants
      );
    }

    return this._checkResponseTypeVariantsToGrantTypeVariantCorrespondence(
      candidate.responseTypeVariants as Set<ResponseTypeVariants>,
      grantTypeVariants
    );
  }

  private _checkGrantTypeVariantsToCorrespondence(
    requiredVariants: Set<GrantTypeVariants>,
    checkableVariants: Dictionary<GrantTypeVariants, GrantTypeVariants>
  ) {
    return checkableVariants.hasKeys(requiredVariants);
  }

  private _checkDefaultResponseTypeVariantsToGrantTypeVariantsCorrespondence(
    grantTypeVariants: Dictionary<GrantTypeVariants, GrantTypeVariants>
  ) {
    const requiredGrantTypeVariants = this._getRequiredGrantTypeVariants(
      ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification.DEFAULT_RESPONSE_TYPE_VARIANTS as Set<ResponseTypeVariants>
    );
    return this._checkGrantTypeVariantsToCorrespondence(
      requiredGrantTypeVariants,
      grantTypeVariants
    );
  }

  private _checkResponseTypeVariantsToDefaultGrantTypeVariantCorrespondence(
    responseTypeVariants: Set<ResponseTypeVariants>
  ) {
    const checkableGrantTypeVariants = new Dictionary<
      GrantTypeVariants,
      GrantTypeVariants
    >(
      (
        ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification.DEFAULT_GRANT_TYPE_VARIANTS as Set<GrantTypeVariants>
      ).entries()
    );
    return this._checkGrantTypeVariantsToCorrespondence(
      this._getRequiredGrantTypeVariants(responseTypeVariants),
      checkableGrantTypeVariants
    );
  }

  private _checkResponseTypeVariantsToGrantTypeVariantCorrespondence(
    responseTypeVariants: Set<ResponseTypeVariants>,
    grantTypeVariants: Dictionary<GrantTypeVariants, GrantTypeVariants>
  ) {
    return this._checkGrantTypeVariantsToCorrespondence(
      this._getRequiredGrantTypeVariants(responseTypeVariants),
      grantTypeVariants
    );
  }

  private _getRequiredGrantTypeVariants(
    responseTypeVariants: Set<ResponseTypeVariants>
  ) {
    let satisfiedGrantTypeVariants: GrantTypeVariants[] = [];
    responseTypeVariants.forEach((variant) => {
      satisfiedGrantTypeVariants = [
        ...satisfiedGrantTypeVariants,
        ...this._correspondence[variant],
      ];
    });
    return new Set<GrantTypeVariants>(satisfiedGrantTypeVariants);
  }
}
