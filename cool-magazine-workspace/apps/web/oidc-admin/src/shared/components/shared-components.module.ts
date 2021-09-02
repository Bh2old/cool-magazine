import { NgModule } from '@angular/core';
import { AccordionComponentsModule } from './accordion';
import { TextButtonModule } from './buttons';
import { MainHeaderLayoutModule } from './main-router-outlet-layout-parts';

@NgModule({
  declarations: [],
  imports: [
    MainHeaderLayoutModule,
    TextButtonModule,
    AccordionComponentsModule,
  ],
  exports: [
    MainHeaderLayoutModule,
    TextButtonModule,
    AccordionComponentsModule,
  ],
})
export class SharedComponentsModule {}
