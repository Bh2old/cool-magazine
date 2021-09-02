import { Directive, Inject, InjectionToken, Self } from '@angular/core';
import {
  ACCORDION_ELEMENTS_DISPATCHER,
  AccordionElementsDispatcher,
  IAccordionElementsDispatcher,
  CmCdkAccordionBase,
} from '@cool-magazine/angular-cdk';

export const APP_ACCORDION: InjectionToken<AccordionDirective> =
  new InjectionToken<AccordionDirective>('AccordionDirective');

@Directive({
  selector: 'app-accordion, [appAccordion]',
  exportAs: 'appAccordion',
  providers: [
    { provide: APP_ACCORDION, useExisting: AccordionDirective },
    {
      provide: ACCORDION_ELEMENTS_DISPATCHER,
      useFactory: (): AccordionElementsDispatcher =>
        new AccordionElementsDispatcher(),
    },
  ],
})
export class AccordionDirective extends CmCdkAccordionBase {
  constructor(
    @Self()
    @Inject(ACCORDION_ELEMENTS_DISPATCHER)
    _accordionItemsDispatcher: IAccordionElementsDispatcher
  ) {
    super(_accordionItemsDispatcher);
  }
}
