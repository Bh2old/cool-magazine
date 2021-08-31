import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

const TRIGGER_NAME = 'showHide';
const STATE_SHOW = 'true';
const STATE_HIDE = 'false';

export const NAVIGATION_COMPONENT_SHOW_HIDE_TRIGGER = trigger(TRIGGER_NAME, [
  state(
    STATE_SHOW,
    style({
      width: '*',
    })
  ),
  state(
    STATE_HIDE,
    style({
      width: '0px',
    })
  ),
  transition(`${STATE_SHOW} => ${STATE_HIDE}`, [
    animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'),
  ]),
]);
