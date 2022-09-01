import { TestBed } from '@angular/core/testing';

import { AllowedProcuduresToPerformService } from './allowed-procudures-to-perform.service';

describe('AllowedProcuduresToPerformService', () => {
  let service: AllowedProcuduresToPerformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllowedProcuduresToPerformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
