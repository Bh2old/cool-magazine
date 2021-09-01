import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ClientsAppRoute,
  HomeAppRoute,
  IPointsRootAppRouting,
  RootAppRouting,
  WildcardAppRoute,
} from '../core';
import { HomePageComponent } from './home-page';
import { PageNotFoundComponent } from './page-not-found';

const pointsRootAppRouting: IPointsRootAppRouting = {
  home: new HomeAppRoute(HomePageComponent),
  clients: new ClientsAppRoute(() =>
    import('./clients').then((module) => module.ClientsListModule)
  ),
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
