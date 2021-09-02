import { NgModule } from '@angular/core';
import { AccordionItemModule } from './accordion-item';
import { AccordionItemContentModule } from './accordion-item-content';
import { AccordionItemHeaderModule } from './accordion-item-header';
import { AccordionDirective } from './accordion.directive';

@NgModule({
  declarations: [AccordionDirective],
  exports: [
    AccordionDirective,
    AccordionItemModule,
    AccordionItemHeaderModule,
    AccordionItemContentModule,
  ],
})
export class AccordionComponentsModule {}
