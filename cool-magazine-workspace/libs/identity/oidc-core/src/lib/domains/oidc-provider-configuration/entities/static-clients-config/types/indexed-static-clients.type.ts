import { StaticClientsIndexById } from './static-clients-index-by-id.type';
import { StaticClientsIndexBySecret } from './static-clients-index-by-secret.type';

export type IndexedStaticClients = {
  readonly byId: StaticClientsIndexById;
  readonly bySecrets: StaticClientsIndexBySecret;
};
