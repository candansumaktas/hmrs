import { TestBed } from '@angular/core/testing';

import { JobAdvertisementGuard } from './job-advertisement.guard';

describe('JobAdvertisementGuard', () => {
  let guard: JobAdvertisementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JobAdvertisementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
