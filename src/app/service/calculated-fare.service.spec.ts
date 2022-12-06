import { TestBed } from '@angular/core/testing';

import { CalculatedFareService } from './calculated-fare.service';

describe('CalculatedFareService', () => {
  let service: CalculatedFareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatedFareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
