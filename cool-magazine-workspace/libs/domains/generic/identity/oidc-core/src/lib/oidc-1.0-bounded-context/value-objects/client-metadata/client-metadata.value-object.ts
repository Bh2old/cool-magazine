import { GrantType, GrantTypeDictionary } from '../grant-type';
import { ResponseType, ResponseTypeDictionary } from '../response-type';
import { RedirectUri, RedirectUriDictionary } from '../redirect-uri';
import { IClientMetadataCreateValues } from './models';
import { ValueObject } from '@bh2old/ddd-expc';

export class ClientMetadata extends ValueObject {
  private readonly _redirectUris: RedirectUriDictionary;
  public get redirectUris(): RedirectUri[] {
    return [...this._redirectUris.values()];
  }

  private readonly _responseTypes: ResponseTypeDictionary;

  public get responseTypes(): ResponseType[] {
    return [...this._responseTypes.values()];
  }

  private readonly _grantTypes: GrantTypeDictionary;

  public get grantTypes(): GrantType[] {
    return [...this._grantTypes.values()];
  }

  private constructor(
    redirectUris: RedirectUriDictionary,
    responseTypes: ResponseTypeDictionary,
    grantTypes: GrantTypeDictionary
  ) {
    super();
    this._redirectUris = redirectUris.clone();
    this._responseTypes = responseTypes.clone();
    this._grantTypes = grantTypes.clone();
  }

  static create(
    clientMetadataCreateValues: IClientMetadataCreateValues
  ): ClientMetadata {
    return new ClientMetadata(
      clientMetadataCreateValues.redirectUris,
      clientMetadataCreateValues.responseTypes,
      clientMetadataCreateValues.grantTypes
    );
  }
}
