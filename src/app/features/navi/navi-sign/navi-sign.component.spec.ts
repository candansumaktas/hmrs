import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviSignComponent } from './navi-sign.component';

describe('NaviSignComponent', () => {
  let component: NaviSignComponent;
  let fixture: ComponentFixture<NaviSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
