import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsListLayoutComponent } from './clients-list-layout.component';

describe('ClientsListComponent', () => {
  let component: ClientsListLayoutComponent;
  let fixture: ComponentFixture<ClientsListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsListLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
