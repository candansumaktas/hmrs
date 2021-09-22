import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviCandidateInfoComponent } from './navi-candidate-info.component';

describe('NaviCandidateInfoComponent', () => {
  let component: NaviCandidateInfoComponent;
  let fixture: ComponentFixture<NaviCandidateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviCandidateInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviCandidateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
