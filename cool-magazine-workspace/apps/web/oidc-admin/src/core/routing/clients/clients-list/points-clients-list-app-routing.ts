import { IPointsAppRouting } from '../../abstractions';
import { ClientsListAppRoute } from './clients-list-app-route';

export interface IPointsClientsListAppRouting extends IPointsAppRouting {
  readonly clientsList: ClientsListAppRoute;
}
