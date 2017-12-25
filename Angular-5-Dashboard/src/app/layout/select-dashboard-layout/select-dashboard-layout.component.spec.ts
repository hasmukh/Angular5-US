import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDashboardLayoutComponent } from './select-dashboard-layout.component';

describe('SelectDashboardLayoutComponent', () => {
  let component: SelectDashboardLayoutComponent;
  let fixture: ComponentFixture<SelectDashboardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDashboardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
