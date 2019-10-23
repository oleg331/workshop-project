import { TemplateRef } from '@angular/core';
import { Status } from './status.model';

export class NotificationOptions {
  type: Status.success | Status.error;
  title: string;
  message: string;
}
