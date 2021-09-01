import { NgModule } from '@angular/core';
import { TextButtonModule } from './buttons';
import { MainHeaderLayoutModule } from './main-router-outlet-layout-parts';

@NgModule({
  declarations: [],
  imports: [MainHeaderLayoutModule, TextButtonModule],
  exports: [MainHeaderLayoutModule, TextButtonModule],
})
export class SharedComponentsModule {}
