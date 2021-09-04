import { InjectionToken } from '@angular/core';
import { IEnvironmentLocationService } from './i-environment-location-service';

export const ENVIRONMENT_LOCATION_SERVICE_TOKEN: InjectionToken<IEnvironmentLocationService> =
  new InjectionToken<IEnvironmentLocationService>('LocationService');
