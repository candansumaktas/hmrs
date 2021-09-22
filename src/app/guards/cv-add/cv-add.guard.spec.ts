import { TestBed } from '@angular/core/testing';

import { CvAddGuard } from './cv-add.guard';

describe('CvAddGuard', () => {
  let guard: CvAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CvAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
