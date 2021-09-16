import { Observable } from 'rxjs';
import { IClientsQuery } from './i-clients-query';

export interface IClientsQueryHandler {
  getClients(query: IClientsQuery): Observable<boolean>;
}
