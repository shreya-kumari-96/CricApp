import { TestBed, async, inject } from '@angular/core/testing';

import { CplayerguardGuard } from './cplayerguard.guard';

describe('CplayerguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CplayerguardGuard]
    });
  });

  it('should ...', inject([CplayerguardGuard], (guard: CplayerguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
