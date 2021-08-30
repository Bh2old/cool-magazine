import { Routes } from '@angular/router';
import { AppRoutingBase } from './abstractions';
import { IPointsRootAppRouting } from './points-root-app-routing';

export class RootAppRouting extends AppRoutingBase<IPointsRootAppRouting> {
  constructor(points: IPointsRootAppRouting) {
    super(points);
  }

  getRoutes(): Routes {
    return [this._points.home, this._points.clients, this._points.wildcard];
  }
}
