import { TestBed, inject } from '@angular/core/testing';

import { LaporanwargaService } from './laporanwarga.service';

describe('LaporanwargaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaporanwargaService]
    });
  });

  it('should be created', inject([LaporanwargaService], (service: LaporanwargaService) => {
    expect(service).toBeTruthy();
  }));
});
