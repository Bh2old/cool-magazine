import { ChangeDetectorRef, Directive } from '@angular/core';
import { CmCdkAccordionItemBase } from '../accordion-item';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive()
export class CmCdkAccordionItemContentBase {
  private readonly _unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private readonly _item: CmCdkAccordionItemBase,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {}

  get expendedItem(): boolean {
    return this._item.isExpanded;
  }

  protected init() {
    merge(this._item.isExpanded$)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(() => this._changeDetectorRef.markForCheck());
  }

  protected destroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
