import { WindowScrollingService } from './window-scrolling.service';

describe('WindowScrollingService', () => {
  let service: WindowScrollingService;

  beforeEach(() => {
    service = new WindowScrollingService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
