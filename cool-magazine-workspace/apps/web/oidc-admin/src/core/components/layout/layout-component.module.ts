import { NgModule } from '@angular/core';
import { FooterComponentModule } from '../footer';
import { HeaderComponentModule } from '../header';
import { MainComponentModule } from '../main';
import { NavigationComponentModule } from '../navigation';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [
    HeaderComponentModule,
    NavigationComponentModule,
    FooterComponentModule,
    MainComponentModule,
  ],
})
export class LayoutComponentModule {}
