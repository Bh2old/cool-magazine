import { InjectionToken } from '@angular/core';
import { INavigationComponentService } from './i-navigation-component-service';
import { NavigationComponentService } from './navigation-component.service';

export const NAVIGATION_COMPONENT_SERVICE_TOKEN =
  new InjectionToken<INavigationComponentService>(
    'INavigationComponentService',
    {
      providedIn: 'root',
      factory: () => new NavigationComponentService(),
    }
  );
