import { TestBed, inject } from '@angular/core/testing';

import { DatakecamatanService } from './datakecamatan.service';

describe('DatakecamatanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatakecamatanService]
    });
  });

  it('should be created', inject([DatakecamatanService], (service: DatakecamatanService) => {
    expect(service).toBeTruthy();
  }));
});
