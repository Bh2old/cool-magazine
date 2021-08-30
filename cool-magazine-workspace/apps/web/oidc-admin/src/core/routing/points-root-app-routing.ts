import { IPointsAppRouting } from './abstractions';
import { ClientsAppRoute } from './clients';
import { HomeAppRoute } from './home';
import { WildcardAppRoute } from './wildcard/wildcard-app-route';

export interface IPointsRootAppRouting extends IPointsAppRouting {
  readonly home: HomeAppRoute;
  readonly clients: ClientsAppRoute;
  readonly wildcard: WildcardAppRoute;
}
