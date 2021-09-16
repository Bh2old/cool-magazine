import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../../shared';
import { ClientsListRoutingModule } from './clients-list-routing.module';
import { ClientsListLayoutComponent } from './dumb-components';

@NgModule({
  declarations: [ClientsListLayoutComponent],
  exports: [ClientsListLayoutComponent],
  imports: [SharedModule,ReactiveFormsModule,  ClientsListRoutingModule],
})
export class ClientsListModule {}
