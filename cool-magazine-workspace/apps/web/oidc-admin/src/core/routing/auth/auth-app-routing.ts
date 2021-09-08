import { Routes } from '@angular/router';
import { AppRoutingBase } from '../abstractions';
import { IPointsAuthAppRouting } from './points-auth-app-routing';

export class AuthAppRouting extends AppRoutingBase<IPointsAuthAppRouting> {
  constructor(points: IPointsAuthAppRouting) {
    super(points);
  }

  getRoutes(): Routes {
    return [this._points.login, this._points.loginSuccess];
  }
}
