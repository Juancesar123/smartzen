import { TestBed, inject } from '@angular/core/testing';

import { IntegratedcctvService } from './integratedcctv.service';

describe('IntegratedcctvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntegratedcctvService]
    });
  });

  it('should be created', inject([IntegratedcctvService], (service: IntegratedcctvService) => {
    expect(service).toBeTruthy();
  }));
});
