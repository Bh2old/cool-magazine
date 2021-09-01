import { Routes } from '@angular/router';
import { AppRoutingBase } from '../../abstractions';
import { IPointsClientsListAppRouting } from './points-clients-list-app-routing';

export class ClientsListAppRouting extends AppRoutingBase<IPointsClientsListAppRouting> {
  constructor(points: IPointsClientsListAppRouting) {
    super(points);
  }

  getRoutes(): Routes {
    return [this._points.clientsList];
  }
}
