import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppendJwtInterceptor } from './append-jwt';
import { BffUnauthorizedInterceptor } from './unauthorized/bff-unauthorized.interceptor';

export const INTERCEPTOR_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: AppendJwtInterceptor, multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BffUnauthorizedInterceptor,
    multi: true,
  },
];
