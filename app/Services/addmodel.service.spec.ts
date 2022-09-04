import { TestBed } from '@angular/core/testing';

import { AddmodelService } from './addmodel.service';

describe('AddmodelService', () => {
  let service: AddmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
