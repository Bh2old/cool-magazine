import { IAccordionElementsEmittedEventsModel } from '../models';

export type AccordionElementsEmittedEvent<
  T extends keyof IAccordionElementsEmittedEventsModel
> = { name: T; payload: IAccordionElementsEmittedEventsModel[T] } | undefined;
