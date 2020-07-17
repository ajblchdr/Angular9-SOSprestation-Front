import { TestBed } from '@angular/core/testing';

import { ServiceProposalService } from './service-proposal.service';

describe('ServiceProposalService', () => {
  let service: ServiceProposalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProposalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
