import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [RouterModule],
})
export class MainComponentModule {}
