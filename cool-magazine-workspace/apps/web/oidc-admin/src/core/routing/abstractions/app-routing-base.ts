import { Routes } from '@angular/router';
import { IAppRouting } from './i-app-routing';
import { IPointsAppRouting } from './i-points-app-routing';

export abstract class AppRoutingBase<TPoints extends IPointsAppRouting>
  implements IAppRouting
{
  protected readonly _points: TPoints;

  constructor(points: TPoints) {
    this._points = points;
  }

  abstract getRoutes(): Routes;
}
