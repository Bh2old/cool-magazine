import { TestBed } from '@angular/core/testing';

import { ClientsListRouteDataResolver } from './client-list-route-data.resolver';

describe('ClientListDataResolver', () => {
  let resolver: ClientsListRouteDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ClientsListRouteDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
