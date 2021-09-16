import { NgModule } from '@angular/core';
import { ClientsListLayoutComponent } from './dumb-components';
import { ClientsListAppRoute, ClientsListAppRouting } from '../../../core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = new ClientsListAppRouting({
  clientsList: new ClientsListAppRoute(ClientsListLayoutComponent),
}).getRoutes();

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ClientsListRoutingModule {}
