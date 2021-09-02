import { NgModule } from '@angular/core';
import { AccordionItemContentModule } from '../accordion-item-content';
import { AccordionItemHeaderModule } from '../accordion-item-header';
import { AccordionItemComponent } from './accordion-item.component';

@NgModule({
  declarations: [AccordionItemComponent],
  imports: [AccordionItemHeaderModule, AccordionItemContentModule],
  exports: [AccordionItemComponent],
})
export class AccordionItemModule {}
