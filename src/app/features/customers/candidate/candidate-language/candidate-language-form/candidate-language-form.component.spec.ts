import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLanguageFormComponent } from './candidate-language-form.component';

describe('CandidateLanguageFormComponent', () => {
  let component: CandidateLanguageFormComponent;
  let fixture: ComponentFixture<CandidateLanguageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateLanguageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateLanguageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
