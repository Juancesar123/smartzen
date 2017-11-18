import { TestBed, inject } from '@angular/core/testing';

import { EService } from './e.service';

describe('EService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EService]
    });
  });

  it('should be created', inject([EService], (service: EService) => {
    expect(service).toBeTruthy();
  }));
});
