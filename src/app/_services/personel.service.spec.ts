import { TestBed } from '@angular/core/testing';

import { PersonelService } from './personel.service';

describe('PersonelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonelService = TestBed.get(PersonelService);
    expect(service).toBeTruthy();
  });
});
