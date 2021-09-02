import {
  ChangeDetectorRef,
  Directive,
  OnDestroy,
  Inject,
  InjectionToken,
  Optional,
  SkipSelf,
  OnInit,
} from '@angular/core';
import {
  AccordionElementsDispatcher,
  ACCORDION_ELEMENTS_DISPATCHER,
  IAccordionElementsDispatcher,
} from '../accordion-elements-dispatcher';
import {
  CmCdkAccordionDirective,
  CM_CDK_ACCORDION,
} from '../cdk.accordion.directive';
import { CmCdkAccordionItemBase } from './cdk.accordion-item-base';

export const CM_CDK_ACCORDION_ITEM: InjectionToken<CmCdkAccordionItemDirective> =
  new InjectionToken<CmCdkAccordionItemDirective>(
    'CmCdkAccordionItemDirective'
  );

@Directive({
  selector: 'cmcdk-accordion-item, [cmcdkAccordionItem]',
  exportAs: 'cmcdkAccordionItem',
  providers: [
    {
      provide: ACCORDION_ELEMENTS_DISPATCHER,
      useFactory: (): AccordionElementsDispatcher =>
        new AccordionElementsDispatcher(),
    },
    {
      provide: CM_CDK_ACCORDION,
      useValue: undefined,
    },
  ],
})
export class CmCdkAccordionItemDirective
  extends CmCdkAccordionItemBase
  implements OnDestroy, OnInit
{
  constructor(
    _changeDetectorRef: ChangeDetectorRef,
    @Optional()
    @SkipSelf()
    @Inject(ACCORDION_ELEMENTS_DISPATCHER)
    _accordionItemsDispatcher: IAccordionElementsDispatcher,
    @Optional()
    @SkipSelf()
    @Inject(CM_CDK_ACCORDION)
    _cmcdkAccordion: CmCdkAccordionDirective
  ) {
    super(_changeDetectorRef, _accordionItemsDispatcher, _cmcdkAccordion);
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
