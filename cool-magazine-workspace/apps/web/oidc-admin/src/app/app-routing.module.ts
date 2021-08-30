import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ClientsAppRoute,
  HomeAppRoute,
  IPointsRootAppRouting,
  RootAppRouting,
  WildcardAppRoute,
} from '../core';
import { ClientsListComponent } from './clients';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found';

const pointsRootAppRouting: IPointsRootAppRouting = {
  home: new HomeAppRoute(HomePageComponent),
  clients: new ClientsAppRoute(ClientsListComponent),
  wildcard: new WildcardAppRoute(PageNotFoundComponent),
} as const;

const ROUTES: Routes = new RootAppRouting(pointsRootAppRouting).getRoutes();

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
})
export class AppRoutingModule {}
