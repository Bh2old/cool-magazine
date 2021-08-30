import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ClientsAppRouteLink, HomeAppRouteLink } from '../../routing';

@Component({
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
}
