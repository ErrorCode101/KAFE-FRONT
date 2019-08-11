import { TestBed } from '@angular/core/testing';

import { CookieStoreService } from './cookie-store.service';

describe('CookieStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookieStoreService = TestBed.get(CookieStoreService);
    expect(service).toBeTruthy();
  });
});
