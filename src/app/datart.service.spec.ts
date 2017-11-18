import { TestBed, inject } from '@angular/core/testing';

import { DatartService } from './datart.service';

describe('DatartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatartService]
    });
  });

  it('should be created', inject([DatartService], (service: DatartService) => {
    expect(service).toBeTruthy();
  }));
});
