import { NgModule } from '@angular/core';
import { SharedModule } from './../../../shared';
import { ClientsListRoutingModule } from './clients-list-routing.module';
import { ClientsListComponent } from './clients-list.component';

@NgModule({
  declarations: [ClientsListComponent],
  exports: [ClientsListComponent],
  imports: [SharedModule, ClientsListRoutingModule],
})
export class ClientsListModule {}
