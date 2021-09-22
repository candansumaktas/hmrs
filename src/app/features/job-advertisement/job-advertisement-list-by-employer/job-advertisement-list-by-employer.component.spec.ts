import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdvertisementListByEmployerComponent } from './job-advertisement-list-by-employer.component';

describe('JobAdvertisementListByEmployerComponent', () => {
  let component: JobAdvertisementListByEmployerComponent;
  let fixture: ComponentFixture<JobAdvertisementListByEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdvertisementListByEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdvertisementListByEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
