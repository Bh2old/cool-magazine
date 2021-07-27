import { AggregateRoot, getCollectionClonedItems } from '@bh2old/ddd-expc';
import { StaticClient } from '../../entities/static-client';
import { IStaticClientsConfigCreateData } from './models';

export class StaticClientsConfig extends AggregateRoot {
  private readonly _clients: StaticClient[];
  public get clients(): Readonly<Readonly<StaticClient>[]> {
    return getCollectionClonedItems(this._clients);
  }

  private constructor(clients: StaticClient[]) {
    super();
    this._clients = clients;
  }

  static create(
    staticClientsConfigCreateData: IStaticClientsConfigCreateData
  ): StaticClientsConfig {
    const clients: StaticClient[] = [];
    for (const client of staticClientsConfigCreateData.clients.values()) {
      clients.push(StaticClient.create(client));
    }

    return new StaticClientsConfig(clients);
  }
}
