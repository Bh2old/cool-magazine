import { NgModule } from '@angular/core';
import { ClientsListRoutingModule } from './clients-list-routing.module';
import { ClientsListComponent } from './clients-list.component';

@NgModule({
  declarations: [ClientsListComponent],
  exports: [ClientsListComponent],
  imports: [ClientsListRoutingModule],
})
export class ClientsListModule {}
