import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { GrantType, GrantTypeVariants } from '../../../../grant-type';
import { ResponseType, ResponseTypeVariants } from '../../../../response-type';
import { IClientMetadataCreateValues } from '../../../models';
import { ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification } from './response-type-variants-to-grant-type-variants-correspondence-specification';

interface CorrespondenceProperties {
  responseTypeVariants?: IClientMetadataCreateValues['responseTypeVariants'];
  grantTypeVariants?: IClientMetadataCreateValues['grantTypeVariants'];
}
export class ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<CorrespondenceProperties>
{
  private readonly _defaultResponseTypeVariants =
    ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification.DEFAULT_RESPONSE_TYPE_VARIANTS;
  private readonly _defaultGrantTypeVariants =
    ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification.DEFAULT_GRANT_TYPE_VARIANTS;

  private get _fullSetResponseTypeVariants() {
    const variants = new Set<ResponseTypeVariants>();
    for (const key in ResponseType.RESPONSE_TYPES_VARIANTS) {
      if (
        Object.prototype.hasOwnProperty.call(
          ResponseType.RESPONSE_TYPES_VARIANTS,
          key
        )
      ) {
        variants.add(key as ResponseTypeVariants);
      }
    }
    return variants;
  }

  private get _fullSetGrantTypeVariants() {
    const variants = new Set<GrantTypeVariants>();
    for (const key in GrantType.GRANT_TYPES_VARIANTS) {
      if (
        Object.prototype.hasOwnProperty.call(
          GrantType.GRANT_TYPES_VARIANTS,
          key
        )
      ) {
        variants.add(key as GrantTypeVariants);
      }
    }
    return variants;
  }

  private get _correspondenceExamples() {
    return [
      {
        responseTypeVariants: new Set<ResponseTypeVariants>().add('code'),
        grantTypeVariants: new Set<GrantTypeVariants>(['authorization_code']),
      },
      {
        responseTypeVariants: new Set<ResponseTypeVariants>().add('id_token'),
        grantTypeVariants: new Set<GrantTypeVariants>(['implicit']),
      },
      {
        responseTypeVariants: new Set<ResponseTypeVariants>().add(
          'token id_token'
        ),
        grantTypeVariants: new Set<GrantTypeVariants>([
          'authorization_code',
          'implicit',
        ]),
      },
      {
        responseTypeVariants: new Set<ResponseTypeVariants>().add(
          'code id_token'
        ),
        grantTypeVariants: new Set<GrantTypeVariants>([
          'authorization_code',
          'implicit',
        ]),
      },
      {
        responseTypeVariants: new Set<ResponseTypeVariants>().add('code token'),
        grantTypeVariants: new Set<GrantTypeVariants>([
          'authorization_code',
          'implicit',
        ]),
      },
      {
        responseTypeVariants: new Set<ResponseTypeVariants>().add(
          'code token id_token'
        ),
        grantTypeVariants: new Set<GrantTypeVariants>([
          'authorization_code',
          'implicit',
        ]),
      },
    ];
  }

  private get _undefinedPropertiesExample() {
    return {
      responseTypeVariants: undefined,
      grantTypeVariants: undefined,
    };
  }

  private get _defaultPropertiesExample() {
    return {
      responseTypeVariants: new Set<ResponseTypeVariants>(
        this._defaultResponseTypeVariants
      ),
      grantTypeVariants: new Set<GrantTypeVariants>(
        this._defaultGrantTypeVariants
      ),
    };
  }

  private get _fullSetPropertiesExample() {
    return {
      responseTypeVariants: this._fullSetResponseTypeVariants,
      grantTypeVariants: this._fullSetGrantTypeVariants,
    };
  }

  get valid() {
    const mergedExamples = [
      ...this._correspondenceExamples,
      this._defaultPropertiesExample,
      this._undefinedPropertiesExample,
      this._fullSetPropertiesExample,
    ];

    return mergedExamples;
  }

  get invalid() {
    const fullSetResponseTypeVariants = this._fullSetResponseTypeVariants;
    const fullSetButNoAuthorizationCode = this._fullSetGrantTypeVariants;
    fullSetButNoAuthorizationCode.delete('authorization_code');

    const fullSetButNoImplicit = this._fullSetGrantTypeVariants;
    fullSetButNoImplicit.delete('implicit');

    const fullSetButNoAuthorizationCodeAndImplicit =
      this._fullSetGrantTypeVariants;
    fullSetButNoAuthorizationCodeAndImplicit.delete('authorization_code');
    fullSetButNoAuthorizationCodeAndImplicit.delete('implicit');

    return [
      {
        responseTypeVariants: fullSetResponseTypeVariants,
        grantTypeVariants: undefined,
      },
      {
        responseTypeVariants: fullSetResponseTypeVariants,
        grantTypeVariants: fullSetButNoAuthorizationCode,
      },
      {
        responseTypeVariants: fullSetResponseTypeVariants,
        grantTypeVariants: fullSetButNoImplicit,
      },
      {
        responseTypeVariants: fullSetResponseTypeVariants,
        grantTypeVariants: fullSetButNoAuthorizationCodeAndImplicit,
      },
      {
        responseTypeVariants: new Set<ResponseTypeVariants>().add('code'),
        grantTypeVariants: fullSetButNoAuthorizationCode,
      },
      {
        responseTypeVariants: new Set<ResponseTypeVariants>().add('id_token'),
        grantTypeVariants: fullSetButNoImplicit,
      },
      {
        responseTypeVariants: new Set<ResponseTypeVariants>().add(
          'token id_token'
        ),
        grantTypeVariants: fullSetButNoAuthorizationCodeAndImplicit,
      },
      {
        responseTypeVariants: new Set<ResponseTypeVariants>().add(
          'code id_token'
        ),
        grantTypeVariants: fullSetButNoAuthorizationCodeAndImplicit,
      },
      {
        responseTypeVariants: new Set<ResponseTypeVariants>().add('code token'),
        grantTypeVariants: fullSetButNoAuthorizationCodeAndImplicit,
      },
      {
        responseTypeVariants: new Set<ResponseTypeVariants>().add(
          'code token id_token'
        ),
        grantTypeVariants: fullSetButNoAuthorizationCodeAndImplicit,
      },
    ];
  }
}
