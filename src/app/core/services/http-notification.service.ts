import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { NotificationService } from './notification.service';

import { HttpParams, Status, NotificationOptions } from '../models';

import { getNotificationParams } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class HttpNotificationService extends NotificationService {
  constructor(toastr: ToastrService) {
    super(toastr);
  }

  showNotification(type: Status.success | Status.error, httpParams: HttpParams) {
    const options: NotificationOptions = getNotificationParams(
      type,
      httpParams
    );

    switch (type) {
      case Status.error: {
        super.showErrorNotification(options.message, options.title);
        break;
      }

      case Status.success:
      default: {
        super.showSuccessNotification(options.message, options.title);
      }
    }
  }
}
