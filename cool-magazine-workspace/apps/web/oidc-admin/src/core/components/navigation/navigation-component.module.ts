import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [RouterModule],
})
export class NavigationComponentModule {}
