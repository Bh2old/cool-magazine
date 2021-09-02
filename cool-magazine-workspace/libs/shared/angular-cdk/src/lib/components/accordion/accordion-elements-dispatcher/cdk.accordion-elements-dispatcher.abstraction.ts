import { Observable, Subscription } from 'rxjs';
import { IAccordionElementsEmittedEventsModel } from './models';
import {
  AccordionElementsEmittedEvent,
  AccordionElementsEmittedEventsSubscribers,
} from './types';

export interface IAccordionElementsDispatcher {
  subscribe(
    eventSubscribers: AccordionElementsEmittedEventsSubscribers
  ): Subscription;
  emit<T extends keyof IAccordionElementsEmittedEventsModel>(
    eventName: T,
    eventPayload: IAccordionElementsEmittedEventsModel[T]
  ): void;
  getEmittedEvents$(): Observable<
    AccordionElementsEmittedEvent<keyof IAccordionElementsEmittedEventsModel>
  >;
  destroy(): void;
}
