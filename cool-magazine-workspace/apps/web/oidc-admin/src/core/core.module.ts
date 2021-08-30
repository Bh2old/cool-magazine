import { NgModule } from '@angular/core';
import { CoreComponentsModule } from './components';

@NgModule({
  imports: [CoreComponentsModule],
  exports: [CoreComponentsModule],
})
export class CoreModule {}
