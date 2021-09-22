import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSchoolFormComponent } from './candidate-school-form.component';

describe('CandidateSchoolFormComponent', () => {
  let component: CandidateSchoolFormComponent;
  let fixture: ComponentFixture<CandidateSchoolFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSchoolFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSchoolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
