import { Directive, Inject, InjectionToken, Self } from '@angular/core';
import { CmCdkAccordionBase } from './cdk.accordion-base';
import {
  AccordionElementsDispatcher,
  ACCORDION_ELEMENTS_DISPATCHER,
  IAccordionElementsDispatcher,
} from './accordion-elements-dispatcher';

export const CM_CDK_ACCORDION: InjectionToken<CmCdkAccordionDirective> =
  new InjectionToken<CmCdkAccordionDirective>('CmCdkAccordionDirective');

@Directive({
  selector: 'cmcdk-accordion, [cmcdkCdkAccordion]',
  exportAs: 'cmcdkAccordion',
  providers: [
    { provide: CM_CDK_ACCORDION, useExisting: CmCdkAccordionDirective },
    {
      provide: ACCORDION_ELEMENTS_DISPATCHER,
      useFactory: (): AccordionElementsDispatcher =>
        new AccordionElementsDispatcher(),
    },
  ],
})
export class CmCdkAccordionDirective extends CmCdkAccordionBase {
  constructor(
    @Self()
    @Inject(ACCORDION_ELEMENTS_DISPATCHER)
    _accordionItemsDispatcher: IAccordionElementsDispatcher
  ) {
    super(_accordionItemsDispatcher);
  }
}
