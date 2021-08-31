import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ClientsAppRouteLink, HomeAppRouteLink } from '../../routing';
import { NAVIGATION_COMPONENT_SHOW_HIDE_TRIGGER } from './animations';
import {
  INavigationComponentService,
  NAVIGATION_COMPONENT_SERVICE_TOKEN,
} from './services';

@Component({
  animations: [NAVIGATION_COMPONENT_SHOW_HIDE_TRIGGER],
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  private readonly _homeAppRouteLink = new HomeAppRouteLink();
  private readonly _clientsAppRouteLink = new ClientsAppRouteLink();

  private readonly _homeLink = `/${this._homeAppRouteLink.getLink()}`;
  get homeLink() {
    return this._homeLink;
  }
  private readonly _clientsLink = `/${this._clientsAppRouteLink.getLink()}`;
  get clientsLink() {
    return this._clientsLink;
  }

  readonly isShow$ = this._navigationServiceService.isShow$;

  constructor(
    @Inject(NAVIGATION_COMPONENT_SERVICE_TOKEN)
    private readonly _navigationServiceService: INavigationComponentService
  ) {}
}
