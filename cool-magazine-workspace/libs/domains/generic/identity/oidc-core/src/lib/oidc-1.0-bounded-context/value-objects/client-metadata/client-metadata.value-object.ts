import { ValueObject } from '@bh2old/ddd-expc';
import { GrantType } from '../grant-type';
import { RedirectUri } from '../redirect-uri';
import { ResponseType } from '../response-type';
import { IClientMetadataCreateValues } from './models';
import { ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification } from './specifications';
export class ClientMetadata extends ValueObject {
  private readonly _redirectUris: RedirectUri[];
  public get redirectUrisValues(): Readonly<string[]> {
    return this._redirectUris.map((redirectUri) => redirectUri.value);
  }

  private readonly _responseTypes: ResponseType[];
  public get responseTypesValues(): Readonly<string[]> {
    return this._responseTypes.map((responseType) => responseType.value);
  }

  private readonly _grantTypes: GrantType[];
  public get grantTypesValues(): Readonly<string[]> {
    return this._grantTypes.map((grantType) => grantType.value);
  }

  private constructor(
    redirectUris: RedirectUri[],
    responseTypes: ResponseType[],
    grantTypes: GrantType[]
  ) {
    super();
    this._redirectUris = redirectUris;
    this._responseTypes = responseTypes;
    this._grantTypes = grantTypes;
  }

  static create(
    clientMetadataCreateValues: IClientMetadataCreateValues
  ): ClientMetadata {
    const {
      redirectUris,
      responseTypeVariants = ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification.DEFAULT_RESPONSE_TYPE_VARIANTS,
      grantTypeVariants = ResponseTypeVariantsToGrantTypeVariantsCorrespondenceSpecification.DEFAULT_GRANT_TYPE_VARIANTS,
    } = clientMetadataCreateValues;
    return new ClientMetadata(
      RedirectUri.createMany(redirectUris),
      ResponseType.createMany(responseTypeVariants),
      GrantType.createMany(grantTypeVariants)
    );
  }
}
