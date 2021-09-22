import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviEmployerInfoComponent } from './navi-employer-info.component';

describe('NaviEmployerInfoComponent', () => {
  let component: NaviEmployerInfoComponent;
  let fixture: ComponentFixture<NaviEmployerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviEmployerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviEmployerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
