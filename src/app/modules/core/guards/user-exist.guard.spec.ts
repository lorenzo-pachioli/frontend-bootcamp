import { TestBed } from '@angular/core/testing';

import { UserExistGuard } from './user-exist.guard';

describe('UserExistGuard', () => {
  let guard: UserExistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserExistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
