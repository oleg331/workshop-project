import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('NotificationService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), BrowserAnimationsModule],
      providers: [ToastrService]
    })
  );

  it('should be created', () => {
    const service: NotificationService = TestBed.get(NotificationService);
    expect(service).toBeTruthy();
  });
});
