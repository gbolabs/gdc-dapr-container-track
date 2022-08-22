import { TestBed } from '@angular/core/testing';

import { WheaterforecastService } from './wheaterforecast.service';

describe('WheaterforecastService', () => {
  let service: WheaterforecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheaterforecastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
