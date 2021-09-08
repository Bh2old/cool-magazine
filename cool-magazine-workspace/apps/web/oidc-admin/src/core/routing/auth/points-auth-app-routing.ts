import { IPointsAppRouting } from '../abstractions';
import { LoginAppRoute } from './login';
import { LoginSuccessAppRoute } from './login-success';

export interface IPointsAuthAppRouting extends IPointsAppRouting {
  readonly login: LoginAppRoute;
  readonly loginSuccess: LoginSuccessAppRoute;
}
