import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemContentComponent } from './accordion-item-content.component';

describe('AccordionItemContentComponent', () => {
  let component: AccordionItemContentComponent;
  let fixture: ComponentFixture<AccordionItemContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionItemContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
