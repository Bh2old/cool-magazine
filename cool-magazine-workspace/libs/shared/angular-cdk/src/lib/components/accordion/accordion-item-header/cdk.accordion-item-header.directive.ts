import {
  ChangeDetectorRef,
  Directive,
  Host,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CmCdkAccordionItemDirective } from '../accordion-item';
import { CmCdkAccordionItemHeaderBase } from './cdk.accordion-item-header-base';

@Directive({
  selector: 'cmcdk-accordion-item-header, [cmcdkAccordionItemHeader]',
  exportAs: 'cmcdkAccordionItemHeader',
})
export class CmCdkAccordionItemHeaderDirective
  extends CmCdkAccordionItemHeaderBase
  implements OnInit, OnDestroy
{
  constructor(
    @Host() _item: CmCdkAccordionItemDirective,
    _changeDetectorRef: ChangeDetectorRef
  ) {
    super(_item, _changeDetectorRef);
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
