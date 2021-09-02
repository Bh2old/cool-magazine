import { ChangeDetectorRef, Directive, HostListener } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CmCdkAccordionItemBase } from '../accordion-item';

@Directive()
export class CmCdkAccordionItemHeaderBase {
  private readonly _unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private readonly _item: CmCdkAccordionItemBase,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {}

  @HostListener('click')
  toggle(): void {
    this._item.toggle();
  }

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
