import { TestBed, inject } from '@angular/core/testing';

import { DaftarkeluhanService } from './daftarkeluhan.service';

describe('DaftarkeluhanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaftarkeluhanService]
    });
  });

  it('should be created', inject([DaftarkeluhanService], (service: DaftarkeluhanService) => {
    expect(service).toBeTruthy();
  }));
});
