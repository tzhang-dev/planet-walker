import { TestBed } from '@angular/core/testing';

import { ThisChallengeService } from './this-challenge.service';

describe('ThisChallengeService', () => {
  let service: ThisChallengeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThisChallengeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
