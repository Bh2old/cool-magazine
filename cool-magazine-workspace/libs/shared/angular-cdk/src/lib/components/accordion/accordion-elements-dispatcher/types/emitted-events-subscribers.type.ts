import { IAccordionElementsEmittedEventsModel } from '../models';

export type AccordionElementsEmittedEventsSubscribers = {
  [TEventName in keyof IAccordionElementsEmittedEventsModel]?: (
    eventPayload: IAccordionElementsEmittedEventsModel[TEventName]
  ) => void;
};
