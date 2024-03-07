import { TestBed } from '@angular/core/testing';

import { JpdCoreService } from './jpd-core.service';

describe('JpdCoreService', () => {
  let service: JpdCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JpdCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
