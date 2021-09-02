import {
  ChangeDetectorRef,
  Directive,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  AccordionElementsEmittedEventsSubscribers,
  IAccordionElementsDispatcher,
  IAccordionElementsExpandedEventModel,
} from '../accordion-elements-dispatcher';
import { CmCdkAccordionDirective } from '../cdk.accordion.directive';

@Directive()
export class CmCdkAccordionItemBase {
  @Input()
  get isExpanded(): boolean {
    return this._isExpanded;
  }

  set isExpanded(value: boolean) {
    if (this.isDisabled) {
      return;
    }

    if (this._isExpanded !== value) {
      this._isExpanded = value;
      this.isExpanded$.emit(value);

      if (value) {
        if (this._cmcdkAccordion && !this._cmcdkAccordion.isMulti) {
          this._accordionItemsDispatcher &&
            this._accordionItemsDispatcher.emit('expanded', {
              itemId: this._id,
            });
        }
      }

      this._changeDetectorRef.markForCheck();
    }
  }

  private _isExpanded = false;

  @Output()
  isExpanded$: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  get isDisabled(): boolean {
    return this._isDisabled;
  }

  set isDisabled(value: boolean) {
    if (this._isDisabled !== value) {
      this._isDisabled = value;
      this.isDisabled$.emit(value);
      this._changeDetectorRef.markForCheck();
    }
  }

  private _isDisabled = false;

  @Output()
  isDisabled$: EventEmitter<boolean> = new EventEmitter<boolean>();

  private readonly _id: symbol = Symbol('id');
  private readonly _accordionItemsEmittedEventsSubscribers: AccordionElementsEmittedEventsSubscribers =
    {
      expanded: (eventPayload: IAccordionElementsExpandedEventModel): void => {
        if (eventPayload.itemId !== this._id) {
          this.isExpanded = false;
        }
      },
      openCloseAll: (eventPayload): void => {
        this.isExpanded = eventPayload.openCloseAll;
      },
    };

  constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _accordionItemsDispatcher?: IAccordionElementsDispatcher,
    private readonly _cmcdkAccordion?: CmCdkAccordionDirective
  ) {}

  toggle(): void {
    if (!this.isDisabled) {
      this.isExpanded = !this.isExpanded;
    }
  }

  close(): void {
    if (!this.isDisabled) {
      this.isExpanded = false;
    }
  }

  open(): void {
    if (!this.isDisabled) {
      this.isExpanded = true;
    }
  }

  protected init(): void {
    this._accordionItemsDispatcher &&
      this._accordionItemsDispatcher.subscribe(
        this._accordionItemsEmittedEventsSubscribers
      );
  }

  protected destroy(): void {
    this._accordionItemsDispatcher && this._accordionItemsDispatcher.destroy();
  }
}
