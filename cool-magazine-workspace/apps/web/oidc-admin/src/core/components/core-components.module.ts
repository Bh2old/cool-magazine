import { NgModule } from '@angular/core';
import { LayoutComponentModule } from './layout/layout.module';

@NgModule({
  imports: [LayoutComponentModule],
  exports: [LayoutComponentModule],
})
export class CoreComponentsModule {}
