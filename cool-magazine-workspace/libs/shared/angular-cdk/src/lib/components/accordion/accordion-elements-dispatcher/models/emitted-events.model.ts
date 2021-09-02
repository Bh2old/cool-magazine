import { IAccordionElementsExpandedEventModel } from './expanded-event.model';
import { IAccordionElementsOpenCloseAllEventModel } from './open-close-all-event.model';

export interface IAccordionElementsEmittedEventsModel {
  expanded: IAccordionElementsExpandedEventModel;
  openCloseAll: IAccordionElementsOpenCloseAllEventModel;
}
