import { ChangeDetectorRef, Directive, OnDestroy, OnInit } from '@angular/core';
import { CmCdkAccordionItemBase } from '../accordion-item';
import { CmCdkAccordionItemContentBase } from './cdk.accordion-item-content-base';

@Directive({
  selector: 'cmcdk-accordion-item-content, [cmcdkAccordionItemContent]',
  exportAs: 'cmcdkAccordionItemContent',
})
export class CmCdkAccordionItemContentDirective
  extends CmCdkAccordionItemContentBase
  implements OnInit, OnDestroy
{
  constructor(
    _item: CmCdkAccordionItemBase,
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
