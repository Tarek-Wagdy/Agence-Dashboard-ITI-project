import { TestBed } from '@angular/core/testing';

import { PendingCarsService } from './pending-cars.service';

describe('PendingCarsService', () => {
  let service: PendingCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
