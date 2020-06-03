import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationSystemComponent } from './pagination-system.component';

describe('PaginationSystemComponent', () => {
  let component: PaginationSystemComponent;
  let fixture: ComponentFixture<PaginationSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
