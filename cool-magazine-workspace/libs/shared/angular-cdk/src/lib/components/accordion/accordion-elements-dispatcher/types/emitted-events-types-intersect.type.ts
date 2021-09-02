import { IAccordionElementsEmittedEventsModel } from '../models';

export type Intersect<T> = (T extends any ? (x: T) => 0 : never) extends (
  x: infer R
) => 0
  ? R
  : never;
export type AccordionElementsEmittedEventsModelTypesIntersect = Intersect<
  IAccordionElementsEmittedEventsModel[keyof IAccordionElementsEmittedEventsModel]
>;
