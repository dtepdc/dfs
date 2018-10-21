import { TestBed } from '@angular/core/testing';

import { HurricanesService } from './hurricanes.service';

describe('HurricanesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HurricanesService = TestBed.get(HurricanesService);
    expect(service).toBeTruthy();
  });
});
