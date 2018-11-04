import { TestBed } from '@angular/core/testing';

import { GrupService } from './grup.service';

describe('GrupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrupService = TestBed.get(GrupService);
    expect(service).toBeTruthy();
  });
});
