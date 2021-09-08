import { TestBed } from '@angular/core/testing';

import { LoginSuccessJwtGuard } from './login-success-jwt.guard';

describe('JwtGuard', () => {
  let guard: LoginSuccessJwtGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginSuccessJwtGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
