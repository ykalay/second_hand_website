import { TestBed } from '@angular/core/testing';

import { IlanlarService } from './ilanlar.service';

describe('IlanlarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IlanlarService = TestBed.get(IlanlarService);
    expect(service).toBeTruthy();
  });
});
