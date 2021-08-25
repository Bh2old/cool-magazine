import { AggregateRoot } from '@bh2old/ddd-expc';
import { Client } from '../../entities';
import { IStaticClientsConfigCreateData } from './models';

type ClientProperties = {
  readonly id: Client['id'];
  readonly secret: Client['secret'];
  readonly metadata: Client['metadata'];
};

export class StaticClientsConfig extends AggregateRoot {
  private readonly _clients: Client[];
  public get clients(): ClientProperties[] {
    return this._clients.map((client) => {
      return {
        id: client.id,
        secret: client.secret,
        metadata: client.metadata,
      };
    });
  }

  private constructor(clients: Client[]) {
    super();
    this._clients = clients;
  }

  static create(
    staticClientsConfigCreateData: IStaticClientsConfigCreateData
  ): StaticClientsConfig {
    const clients: Client[] = [];
    for (const client of staticClientsConfigCreateData.clients.values()) {
      clients.push(Client.create(client));
    }

    return new StaticClientsConfig(clients);
  }
}
