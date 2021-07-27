import { AggregateRoot } from '@bh2old/ddd-expc';
import { StaticClient } from '../../entities/static-client';
import { IStaticClientsConfigCreateData } from './models';

type Client = {
  readonly id: StaticClient['id'];
  readonly secret: StaticClient['secret'];
  readonly metadata: StaticClient['metadata'];
};

export class StaticClientsConfig extends AggregateRoot {
  private readonly _clients: StaticClient[];
  public get clients(): Client[] {
    return this._clients.map((client) => {
      return {
        id: client.id,
        secret: client.secret,
        metadata: client.metadata,
      };
    });
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
