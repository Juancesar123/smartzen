import { TestBed, inject } from '@angular/core/testing';

import { DatakotaService } from './datakota.service';

describe('DatakotaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatakotaService]
    });
  });

  it('should be created', inject([DatakotaService], (service: DatakotaService) => {
    expect(service).toBeTruthy();
  }));
});
