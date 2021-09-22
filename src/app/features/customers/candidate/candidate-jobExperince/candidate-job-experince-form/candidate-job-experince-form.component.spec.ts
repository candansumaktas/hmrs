import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateJobExperinceFormComponent } from './candidate-job-experince-form.component';

describe('CandidateJobExperinceFormComponent', () => {
  let component: CandidateJobExperinceFormComponent;
  let fixture: ComponentFixture<CandidateJobExperinceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateJobExperinceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateJobExperinceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
