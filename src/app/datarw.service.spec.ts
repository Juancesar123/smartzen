import { TestBed, inject } from '@angular/core/testing';

import { DatarwService } from './datarw.service';

describe('DatarwService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatarwService]
    });
  });

  it('should be created', inject([DatarwService], (service: DatarwService) => {
    expect(service).toBeTruthy();
  }));
});
