import { Entity, ICloneable } from '@bh2old/ddd-expc';
import { ClientId, ClientMetadata, ClientSecret } from '../../value-objects';
import { IClientRegistrationData } from './models';

export class StaticClient extends Entity implements ICloneable<StaticClient> {
  private readonly _id: ClientId;
  public get id(): ClientId {
    return this._id;
  }
  private readonly _secret: ClientSecret;
  public get secret(): ClientSecret {
    return this._secret;
  }
  private readonly _metadata: ClientMetadata;
  public get metadata(): ClientMetadata {
    return this._metadata;
  }

  private constructor(
    id: ClientId,
    secret: ClientSecret,
    metadata: ClientMetadata
  ) {
    super();
    this._id = id;
    this._secret = secret;
    this._metadata = metadata;
  }

  clone(): StaticClient {
    throw new Error('Method not implemented.');
  }

  static create(clientRegistrationData: IClientRegistrationData): StaticClient {
    return new StaticClient(
      clientRegistrationData.id,
      clientRegistrationData.secret || ClientSecret.createAsNotSpecified(),
      clientRegistrationData.metadata
    );
  }
}
