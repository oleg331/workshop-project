import { TemplateRef } from '@angular/core';

export class NotificationOptions {
  type: Notification['type'];
  title: string;
  message: string;
}

export class Notification {
  type: 'success' | 'error';
}
