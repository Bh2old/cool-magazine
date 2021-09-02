import { InjectionToken } from '@angular/core';
import { IAccordionElementsDispatcher } from './cdk.accordion-elements-dispatcher.abstraction';

export const ACCORDION_ELEMENTS_DISPATCHER: InjectionToken<IAccordionElementsDispatcher> =
  new InjectionToken<IAccordionElementsDispatcher>(
    'AccordionElementsDispatcher'
  );
