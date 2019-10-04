import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSpinner: boolean;

  constructor(
    private spinnerService: SpinnerService,
    private httpClient: HttpClient
  ) { }
}
