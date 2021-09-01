import { NgModule } from '@angular/core';
import { ClientsListComponent } from './clients-list.component';
import { ClientsListAppRoute, ClientsListAppRouting } from '../../../core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = new ClientsListAppRouting({
  clientsList: new ClientsListAppRoute(ClientsListComponent),
}).getRoutes();

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
})
export class ClientsListRoutingModule {}
