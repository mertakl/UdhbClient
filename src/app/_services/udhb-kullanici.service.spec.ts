import { TestBed } from '@angular/core/testing';

import { UdhbKullaniciService } from './udhb-kullanici.service';

describe('UdhbKullaniciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UdhbKullaniciService = TestBed.get(UdhbKullaniciService);
    expect(service).toBeTruthy();
  });
});
