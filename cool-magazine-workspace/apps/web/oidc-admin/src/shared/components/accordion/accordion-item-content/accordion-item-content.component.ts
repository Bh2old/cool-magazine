import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { CmCdkAccordionItemContentBase } from '@cool-magazine/angular-cdk';
import { AccordionItemComponent } from '../accordion-item';

@Component({
  selector: 'app-accordion-item-content',
  templateUrl: './accordion-item-content.component.html',
  styleUrls: ['./accordion-item-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemContentComponent
  extends CmCdkAccordionItemContentBase
  implements OnInit, OnDestroy
{
  constructor(
    _item: AccordionItemComponent,
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
