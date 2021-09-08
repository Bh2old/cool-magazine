import { TestBed } from '@angular/core/testing';

import { BffUnauthorizedInterceptor } from './bff-unauthorized.interceptor';

describe('UnauthorizedInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BffUnauthorizedInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BffUnauthorizedInterceptor = TestBed.inject(BffUnauthorizedInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
