import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSkillFromComponent } from './candidate-skill-from.component';

describe('CandidateSkillFromComponent', () => {
  let component: CandidateSkillFromComponent;
  let fixture: ComponentFixture<CandidateSkillFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSkillFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSkillFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
