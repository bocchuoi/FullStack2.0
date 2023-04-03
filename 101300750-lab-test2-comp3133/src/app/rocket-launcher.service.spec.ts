import { TestBed } from '@angular/core/testing';

import { RocketLauncherService } from './rocket-launcher.service';

describe('RocketLauncherService', () => {
  let service: RocketLauncherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketLauncherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
