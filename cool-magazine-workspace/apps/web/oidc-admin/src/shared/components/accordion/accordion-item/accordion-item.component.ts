import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Optional,
  SkipSelf,
} from '@angular/core';

import {
  AccordionElementsDispatcher,
  ACCORDION_ELEMENTS_DISPATCHER,
  CmCdkAccordionDirective,
  CmCdkAccordionItemBase,
  IAccordionElementsDispatcher,
} from '@cool-magazine/angular-cdk';
import { APP_ACCORDION } from '../accordion.directive';
import { accordionItemExpandCollapseAnimationTrigger } from './accordion-item-expand-collapse.animation';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  animations:[accordionItemExpandCollapseAnimationTrigger],
  providers: [
    {
      provide: ACCORDION_ELEMENTS_DISPATCHER,
      useFactory: (): AccordionElementsDispatcher =>
        new AccordionElementsDispatcher(),
    },
    {
      provide: APP_ACCORDION,
      useValue: undefined,
    },
  ],
})
export class AccordionItemComponent
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
    @Inject(APP_ACCORDION)
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
