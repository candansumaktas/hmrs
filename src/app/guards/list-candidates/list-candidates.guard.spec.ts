import { TestBed } from '@angular/core/testing';

import { ListCandidatesGuard } from './list-candidates.guard';

describe('ListCandidatesGuard', () => {
  let guard: ListCandidatesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ListCandidatesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
