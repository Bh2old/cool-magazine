import { NgModule } from '@angular/core';
import { FooterComponentModule } from '../footer/footer-component.module';
import { HeaderComponentModule } from '../header/header-component.module';
import { MainComponentModule } from '../main/main-component.module';
import { NavigationComponentModule } from '../navigation/navigation-component.module';
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
