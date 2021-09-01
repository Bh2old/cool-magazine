import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderLayoutComponent } from './main-header-layout.component';

describe('MainRouterOutletLayoutComponent', () => {
  let component: MainHeaderLayoutComponent;
  let fixture: ComponentFixture<MainHeaderLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHeaderLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
