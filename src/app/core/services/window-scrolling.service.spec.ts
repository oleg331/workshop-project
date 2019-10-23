import { TestBed } from '@angular/core/testing';

import { WindowScrollingService } from './window-scrolling.service';

describe('WindowScrollingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WindowScrollingService = TestBed.get(WindowScrollingService);
    expect(service).toBeTruthy();
  });
});
