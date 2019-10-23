import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { SpinnerService } from './spinner.service';
import { HttpNotificationService } from './http-notification.service';

import { getServiceFromUrl } from '../utils';

import { HttpParams, HttpMethods, Status } from '../models';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  httpParams: HttpParams;

  constructor(
    private spinnerService: SpinnerService,
    private httpNotificationService: HttpNotificationService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.show();

    if (req.method !== HttpMethods.GET) {
      this.httpParams = getServiceFromUrl(req.url, req.method);
    }

    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.spinnerService.hide();

            if (!!this.httpParams) {
              this.httpNotificationService.showNotification(
                Status.success,
                this.httpParams
              );
              this.httpParams = null;
            }
          }
        },
        error => {
          this.spinnerService.hide();

          if (!!this.httpParams) {
            this.httpNotificationService.showNotification(
              Status.error,
              this.httpParams
            );
            this.httpParams = null;
          }
        }
      )
    );
  }
}
