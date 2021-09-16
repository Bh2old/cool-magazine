import {
  IClientsData,
  IClientsDataResolver,
  IClientsQueryHandler,
} from '../ports';

export class ClientsDataService implements IClientsDataResolver {
  constructor(private readonly _clientsQueryHandler: IClientsQueryHandler) {}

  getClients(clientsData: IClientsData) {
    return this._clientsQueryHandler.getClients(clientsData);
  }
}
