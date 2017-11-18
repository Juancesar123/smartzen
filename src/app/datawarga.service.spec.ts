import { TestBed, inject } from '@angular/core/testing';

import { DatawargaService } from './datawarga.service';

describe('DatawargaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatawargaService]
    });
  });

  it('should be created', inject([DatawargaService], (service: DatawargaService) => {
    expect(service).toBeTruthy();
  }));
});
