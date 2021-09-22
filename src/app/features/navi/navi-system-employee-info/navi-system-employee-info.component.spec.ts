import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviSystemEmployeeInfoComponent } from './navi-system-employee-info.component';

describe('NaviSystemEmployeeInfoComponent', () => {
  let component: NaviSystemEmployeeInfoComponent;
  let fixture: ComponentFixture<NaviSystemEmployeeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviSystemEmployeeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviSystemEmployeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
