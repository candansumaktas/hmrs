import { TestBed } from '@angular/core/testing';

import { ListPositionsGuard } from './list-positions.guard';

describe('ListPositionsGuard', () => {
  let guard: ListPositionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ListPositionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
