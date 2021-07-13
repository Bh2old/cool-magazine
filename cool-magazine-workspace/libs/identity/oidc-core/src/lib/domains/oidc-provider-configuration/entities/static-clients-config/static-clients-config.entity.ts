import { AggregateRoot, getCollectionClonedItems } from '@bh2old/ddd-expc';
import { ClientId, ClientSecret } from '../../value-objects';
import { StaticClient } from '../static-client';
import { StaticClientsConfigCreateData } from './models';
import {
  IndexedStaticClients,
  StaticClientsIndexById,
  StaticClientsIndexBySecret,
} from './types';

export class StaticClientsConfig extends AggregateRoot {
  private readonly _clients: StaticClient[];
  public get clients(): Readonly<Readonly<StaticClient>[]> {
    return getCollectionClonedItems(this._clients);
  }

  private constructor(clients: StaticClient[]) {
    super();
    this._clients = clients;
  }

  private static _validateUniqRequiredProperties(clients: StaticClient[]) {
    const indexedClients: IndexedStaticClients = {
      byId: {},
      bySecrets: {},
    };

    for (const client of clients) {
      const isUniqId: boolean = this._validateUniqId(
        indexedClients.byId,
        client.id
      );

      if (isUniqId === false) {
        return false;
      }

      if (client.secret.isSpecified) {
        const isUniqSecret: boolean = this._validateUniqSecret(
          indexedClients.bySecrets,
          client.secret
        );

        if (isUniqSecret === false) {
          return false;
        }

        indexedClients.bySecrets[client.secret.value] = client;
      }

      indexedClients.byId[client.id.value] = client;
    }

    return true;
  }

  private static _validateUniqId(
    clientsIndexById: StaticClientsIndexById,
    id: ClientId
  ) {
    const isExistId: boolean = Object.prototype.hasOwnProperty.call(
      clientsIndexById,
      id.value
    );

    return !isExistId;
  }

  private static _validateUniqSecret(
    clientsIndexBySecrets: StaticClientsIndexBySecret,
    secret: ClientSecret
  ) {
    const isExistSecret: boolean = Object.prototype.hasOwnProperty.call(
      clientsIndexBySecrets,
      secret.value
    );

    return !isExistSecret;
  }

  static create(
    staticClientsConfigCreateData: StaticClientsConfigCreateData
  ): StaticClientsConfig {
    const clients: StaticClient[] = staticClientsConfigCreateData.clients.map(
      (clientCreteData) => StaticClient.create(clientCreteData)
    );

    return new StaticClientsConfig(clients);
  }
}
