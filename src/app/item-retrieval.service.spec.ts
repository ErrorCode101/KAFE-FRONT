import { TestBed } from '@angular/core/testing';

import { ItemRetrievalService } from './item-retrieval.service';

describe('ItemRetrievalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemRetrievalService = TestBed.get(ItemRetrievalService);
    expect(service).toBeTruthy();
  });
});
