import { TestBed } from '@angular/core/testing';

import { HttpNotificationService } from './http-notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('HttpNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ToastrModule.forRoot(), BrowserAnimationsModule],
    providers: [ToastrService]
  }));

  it('should be created', () => {
    const service: HttpNotificationService = TestBed.get(HttpNotificationService);
    expect(service).toBeTruthy();
  });
});
