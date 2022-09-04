import { TestBed } from '@angular/core/testing';

import { ApilinksService } from './apilinks.service';

describe('ApilinksService', () => {
  let service: ApilinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApilinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
