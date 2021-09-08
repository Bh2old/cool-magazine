import { TestBed } from '@angular/core/testing';

import { AppendJwtInterceptor } from './append-jwt.interceptor';

describe('AppendJwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppendJwtInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AppendJwtInterceptor = TestBed.inject(AppendJwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
