import { TestBed } from '@angular/core/testing';

import { ConsolidationHubService } from './consolidation-hub.service';

describe('ConsolidationHubService', () => {
  let service: ConsolidationHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsolidationHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
