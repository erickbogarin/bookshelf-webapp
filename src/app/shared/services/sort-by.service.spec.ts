import { TestBed, inject } from '@angular/core/testing';

import { SortByService } from './sort-by.service';

describe('SortByService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortByService]
    });
  });

  it('should be created', inject([SortByService], (service: SortByService) => {
    expect(service).toBeTruthy();
  }));
});
