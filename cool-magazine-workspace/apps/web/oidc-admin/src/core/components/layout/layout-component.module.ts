import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponentModule } from '../footer/footer-component.module';
import { HeaderComponentModule } from '../header/header-component.module';
import { NavigationComponentModule } from '../navigation/navigation-component.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [
    RouterModule,
    HeaderComponentModule,
    NavigationComponentModule,
    FooterComponentModule,
  ],
})
export class LayoutComponentModule {}
