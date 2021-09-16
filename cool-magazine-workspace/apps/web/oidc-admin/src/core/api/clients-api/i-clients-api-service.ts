import { Observable } from 'rxjs';
import { IClientsApiQuery } from './i-clients-api-query';

export interface IClientsApiService {
  getClients(query: IClientsApiQuery): Observable<boolean>;
}
