import { NgModule } from '@angular/core';
import { CmCdkAccordionDirective } from './cdk.accordion.directive';
import { CmCdkAccordionItemDirective } from './accordion-item';
import { CmCdkAccordionItemContentDirective } from './accordion-item-content';
import { CmCdkAccordionItemHeaderDirective } from './accordion-item-header';

@NgModule({
  declarations: [
    CmCdkAccordionDirective,
    CmCdkAccordionItemDirective,
    CmCdkAccordionItemContentDirective,
    CmCdkAccordionItemHeaderDirective,
  ],
  imports: [],
  exports: [
    CmCdkAccordionDirective,
    CmCdkAccordionItemDirective,
    CmCdkAccordionItemContentDirective,
    CmCdkAccordionItemHeaderDirective,
  ],
})
export class CmCdkAccordionModule {}
