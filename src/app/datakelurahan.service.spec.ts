import { TestBed, inject } from '@angular/core/testing';

import { DatakelurahanService } from './datakelurahan.service';

describe('DatakelurahanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatakelurahanService]
    });
  });

  it('should be created', inject([DatakelurahanService], (service: DatakelurahanService) => {
    expect(service).toBeTruthy();
  }));
});
