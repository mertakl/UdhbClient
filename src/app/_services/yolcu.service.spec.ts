import { TestBed } from '@angular/core/testing';

import { YolcuService } from './yolcu.service';

describe('YolcuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YolcuService = TestBed.get(YolcuService);
    expect(service).toBeTruthy();
  });
});
