import { TestBed, inject } from '@angular/core/testing';

import { LaporankaskeluarService } from './laporankaskeluar.service';

describe('LaporankaskeluarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaporankaskeluarService]
    });
  });

  it('should be created', inject([LaporankaskeluarService], (service: LaporankaskeluarService) => {
    expect(service).toBeTruthy();
  }));
});
