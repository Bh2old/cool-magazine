import {
  GrantTypeVariants,
  ResponseTypeVariants,
} from '../../../value-objects';

interface IClient {
  id: string;
  secret?: string;
  metadata: {
    redirectUris: Set<string>;
    responseTypeVariants?: Set<ResponseTypeVariants>;
    grantTypeVariants?: Set<GrantTypeVariants>;
  };
}

type ClientId = IClient['id'];

export interface IStaticClientsConfigCreateData {
  clients: Map<ClientId, IClient>;
}
