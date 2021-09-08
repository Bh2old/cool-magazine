import { AggregateRoot, ICloneable } from '@bh2old/ddd-expc';
import { ClientId, ClientMetadata, ClientSecret } from '../../value-objects';
import { IClientRegistrationData } from './models';

type Id = ClientId['value'];
type Secret = ClientSecret['value'];
type Metadata = {
  readonly grantTypesValues: ClientMetadata['grantTypesValues'];
  readonly redirectUrisValues: ClientMetadata['redirectUrisValues'];
  readonly responseTypesValues: ClientMetadata['responseTypesValues'];
};

export class Client extends AggregateRoot implements ICloneable<Client> {
  private readonly _id: ClientId;
  public get id(): Id {
    return this._id.value;
  }

  private readonly _secret: ClientSecret;
  public get secret(): Secret {
    return this._secret.value;
  }

  private readonly _metadata: ClientMetadata;
  public get metadata(): Metadata {
    return {
      grantTypesValues: this._metadata.grantTypesValues,
      redirectUrisValues: this._metadata.redirectUrisValues,
      responseTypesValues: this._metadata.responseTypesValues,
    } as const;
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

  clone(): Client {
    return new Client(this._id, this._secret, this._metadata);
  }

  static create(clientRegistrationData: IClientRegistrationData): Client {
    return new Client(
      ClientId.create(clientRegistrationData.id),
      clientRegistrationData.secret
        ? ClientSecret.create(clientRegistrationData.secret)
        : ClientSecret.createAsNotSpecified(),
      ClientMetadata.create(clientRegistrationData.metadata)
    );
  }
}
