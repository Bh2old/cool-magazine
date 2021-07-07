import { GrantType } from '../grant-type';
import { ResponseType } from '../response-type';
import { RedirectUri } from '../redirect-uri';
import { IClientMetadataCreateValues } from './models';
import { GrantTypes, RedirectUris, ResponseTypes } from './types';
import { ValueObject } from '@bh2old/ddd-expc';

export class ClientMetadata extends ValueObject {
  private readonly _redirectUris: RedirectUris = {};
  private _addRedirectUris(newRedirectUris: RedirectUri[]) {
    newRedirectUris.forEach((newRedirectUri) => {
      const isUniqRedirectUri: boolean =
        Object.prototype.hasOwnProperty.call(
          this._redirectUris,
          newRedirectUri.value
        ) === false;

      if (isUniqRedirectUri) {
        this._redirectUris[newRedirectUri.value] = newRedirectUri;
      }
    });
  }
  public get redirectUris(): RedirectUri[] {
    return Object.values(this._redirectUris);
  }

  private readonly _responseTypes: ResponseTypes = {};
  private _addResponseTypes(newResponseTypes: ResponseType[]) {
    newResponseTypes.forEach((newResponseType) => {
      const isUniqResponseType: boolean = Object.prototype.hasOwnProperty.call(
        this._responseTypes,
        newResponseType.value
      );

      if (isUniqResponseType) {
        this._responseTypes[newResponseType.value] = newResponseType;
      }
    });
  }
  public get responseTypes(): ResponseType[] {
    return Object.values(this._responseTypes);
  }

  private readonly _grantTypes: GrantTypes = {};
  private _addGrantTypes(newGrantTypes: GrantType[]) {
    newGrantTypes.forEach((newGrantType) => {
      const isUniqGrantType: boolean = Object.prototype.hasOwnProperty.call(
        this._grantTypes,
        newGrantType.value
      );

      if (isUniqGrantType) {
        this._grantTypes[newGrantType.value] = newGrantType;
      }
    });
  }
  public get grantTypes(): GrantType[] {
    return Object.values(this._grantTypes);
  }

  private constructor(
    redirectUris: RedirectUri[],
    responseTypes: ResponseType[],
    grantTypes: GrantType[]
  ) {
    super();
    this._addRedirectUris(redirectUris);
    this._addResponseTypes(responseTypes);
    this._addGrantTypes(grantTypes);
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
