import { TestBed } from '@angular/core/testing';

import { ListEmployersGuard } from './list-employers.guard';

describe('ListEmployerGuard', () => {
  let guard: ListEmployersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ListEmployersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
