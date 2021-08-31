import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  INavigationComponentService,
  NAVIGATION_COMPONENT_SERVICE_TOKEN,
} from '../navigation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    @Inject(NAVIGATION_COMPONENT_SERVICE_TOKEN)
    private readonly _navigationServiceService: INavigationComponentService
  ) {}

  get show() {
    return this._navigationServiceService.isShow;
  }

  toggle() {
    this._navigationServiceService.toggle();
  }
}
