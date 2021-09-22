import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdvertisementComponent } from './job-advertisement.component';

describe('JobAdvertisementComponent', () => {
  let component: JobAdvertisementComponent;
  let fixture: ComponentFixture<JobAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
