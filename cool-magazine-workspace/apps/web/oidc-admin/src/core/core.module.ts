import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreComponentsModule } from './components/core-components.module';

@NgModule({
  imports: [
    RouterModule.forRoot([], {
      initialNavigation: 'enabledBlocking',
    }),
    CoreComponentsModule,
  ],
  exports: [CoreComponentsModule],
})
export class CoreModule {}
