import { TestBed } from '@angular/core/testing';

import { ServiceInterventionService } from './service-intervention.service';

describe('ServiceInterventionService', () => {
  let service: ServiceInterventionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceInterventionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
