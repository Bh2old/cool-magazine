import { Observable } from 'rxjs';
import { IClientsData } from './i-clients-data';

export interface IClientsDataResolver {
  getClients(clientsData: IClientsData): Observable<boolean>;
}
