import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterModule } from '../footer/footer.module';
import { HeaderComponentModule } from '../header/header.module';
import { NavigationModule } from '../navigation/navigation.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [
    RouterModule,
    HeaderComponentModule,
    NavigationModule,
    FooterModule,
  ],
})
export class LayoutComponentModule {}
