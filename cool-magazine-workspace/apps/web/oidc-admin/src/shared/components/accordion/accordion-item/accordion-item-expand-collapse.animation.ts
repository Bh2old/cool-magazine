import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const EXPANDED_STATE = 'true';
const COLLAPSED_STATE = 'false';

const TRIGGER_NAME = 'expandCollapse';

export const accordionItemExpandCollapseAnimationTrigger: AnimationTriggerMetadata =
  trigger(`${TRIGGER_NAME}`, [
    state(`${COLLAPSED_STATE}, void`, style({ height: '0px' })),
    state(`${EXPANDED_STATE}`, style({ height: '*' })),
    transition(
      `${COLLAPSED_STATE} <=> ${EXPANDED_STATE}, void => ${COLLAPSED_STATE}`,
      [animate('225ms cubic-bezier(0.4,0.0,0.2,1)')]
    ),
  ]);
