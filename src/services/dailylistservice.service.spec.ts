import { TestBed } from '@angular/core/testing';

import { DailylistserviceService } from './dailylistservice.service';

describe('DailylistserviceService', () => {
  let service: DailylistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailylistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
