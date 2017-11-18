import { TestBed, inject } from '@angular/core/testing';

import { BeritaacaraService } from './beritaacara.service';

describe('BeritaacaraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeritaacaraService]
    });
  });

  it('should be created', inject([BeritaacaraService], (service: BeritaacaraService) => {
    expect(service).toBeTruthy();
  }));
});
