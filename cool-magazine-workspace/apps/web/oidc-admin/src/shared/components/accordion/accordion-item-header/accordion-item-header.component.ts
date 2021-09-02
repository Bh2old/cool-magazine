import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Host,
  OnDestroy,
} from '@angular/core';
import { CmCdkAccordionItemHeaderBase } from '@cool-magazine/angular-cdk';
import { AccordionItemComponent } from '../accordion-item';

@Component({
  selector: 'app-accordion-item-header',
  templateUrl: './accordion-item-header.component.html',
  styleUrls: ['./accordion-item-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemHeaderComponent
  extends CmCdkAccordionItemHeaderBase
  implements OnInit, OnDestroy
{
  constructor(
    @Host() _item: AccordionItemComponent,
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
