import { TestBed } from '@angular/core/testing';

import { SeferService } from './sefer.service';

describe('SeferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeferService = TestBed.get(SeferService);
    expect(service).toBeTruthy();
  });
});
