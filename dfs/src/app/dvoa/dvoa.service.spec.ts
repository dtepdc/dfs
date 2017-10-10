import { TestBed, inject } from '@angular/core/testing';

import { DvoaService } from './dvoa.service';

describe('DvoaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DvoaService]
    });
  });

  it('should be created', inject([DvoaService], (service: DvoaService) => {
    expect(service).toBeTruthy();
  }));
});
