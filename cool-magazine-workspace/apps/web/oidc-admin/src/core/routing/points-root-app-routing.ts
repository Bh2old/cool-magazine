import { IPointsAppRouting } from './abstractions';
import { AuthAppRoute } from './auth';
import { ClientsAppRoute } from './clients';
import { HomeAppRoute } from './home';
import { WildcardAppRoute } from './wildcard/wildcard-app-route';

export interface IPointsRootAppRouting extends IPointsAppRouting {
  readonly home: HomeAppRoute;
  readonly clients: ClientsAppRoute;
  readonly auth: AuthAppRoute;
  readonly wildcard: WildcardAppRoute;
}
