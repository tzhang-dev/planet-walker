import { TestBed } from '@angular/core/testing';

import { ThisPlayerService } from './this-player.service';

describe('CurrentPlayerService', () => {
  let service: ThisPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThisPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
