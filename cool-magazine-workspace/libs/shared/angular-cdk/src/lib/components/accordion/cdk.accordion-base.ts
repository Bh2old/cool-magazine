import { Directive, Input } from '@angular/core';
import { IAccordionElementsDispatcher } from './accordion-elements-dispatcher';

@Directive()
export class CmCdkAccordionBase {
  private _isMulti = false;
  @Input()
  get isMulti(): boolean {
    return this._isMulti;
  }
  set isMulti(multi: boolean) {
    this._isMulti = multi;
  }

  constructor(
    private readonly _accordionItemsDispatcher: IAccordionElementsDispatcher
  ) {}

  openAll(): void {
    this._openCloseAll(true);
  }

  closeAll(): void {
    this._openCloseAll(false);
  }

  private _openCloseAll(expanded: boolean) {
    if (this.isMulti) {
      this._accordionItemsDispatcher.emit('openCloseAll', {
        openCloseAll: expanded,
      });
    }
  }
}
