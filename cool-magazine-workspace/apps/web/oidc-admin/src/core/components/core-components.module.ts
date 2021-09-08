import { NgModule } from '@angular/core';
import { LayoutComponentModule } from './layout/layout-component.module';

@NgModule({
  imports: [LayoutComponentModule],
  exports: [LayoutComponentModule],
})
export class CoreComponentsModule {}
