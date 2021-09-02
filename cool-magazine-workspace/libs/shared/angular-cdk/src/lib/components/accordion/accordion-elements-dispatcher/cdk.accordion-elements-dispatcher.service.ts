import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IAccordionElementsDispatcher } from './cdk.accordion-elements-dispatcher.abstraction';
import { IAccordionElementsEmittedEventsModel } from './models';
import {
  AccordionElementsEmittedEvent,
  AccordionElementsEmittedEventsModelTypesIntersect,
  AccordionElementsEmittedEventsSubscribers,
} from './types';

@Injectable()
export class AccordionElementsDispatcher
  implements IAccordionElementsDispatcher, OnDestroy
{
  private readonly _emittedEvents$: BehaviorSubject<
    AccordionElementsEmittedEvent<keyof IAccordionElementsEmittedEventsModel>
  > = new BehaviorSubject<
    AccordionElementsEmittedEvent<keyof IAccordionElementsEmittedEventsModel>
  >(undefined);
  private readonly _unsubscribe$: Subject<void> = new Subject<void>();

  subscribe(
    eventSubscribers: AccordionElementsEmittedEventsSubscribers
  ): Subscription {
    return this._emittedEvents$.pipe(takeUntil(this._unsubscribe$)).subscribe({
      next: <T extends keyof IAccordionElementsEmittedEventsModel>(
        emittedEvent: AccordionElementsEmittedEvent<T>
      ) => {
        if (emittedEvent) {
          const subscriber: AccordionElementsEmittedEventsSubscribers[T] =
            eventSubscribers[emittedEvent.name];
          if (subscriber !== undefined) {
            subscriber(
              emittedEvent.payload as AccordionElementsEmittedEventsModelTypesIntersect
            );
          }
        }
      },
    });
  }

  getEmittedEvents$(): Observable<
    AccordionElementsEmittedEvent<keyof IAccordionElementsEmittedEventsModel>
  > {
    return this._emittedEvents$.asObservable();
  }

  emit<T extends keyof IAccordionElementsEmittedEventsModel>(
    name: T,
    payload: IAccordionElementsEmittedEventsModel[T]
  ): void {
    this._emittedEvents$.next({ name, payload });
  }

  destroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
