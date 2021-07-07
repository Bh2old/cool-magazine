import { ClientId, ClientMetadata, ClientSecret } from "../../../value-objects";

export interface IClientRegistrationData {
  id: ClientId;
  secret?: ClientSecret;
  metadata: ClientMetadata;
}
