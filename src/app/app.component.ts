import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SpinnerService } from './core/services/spinner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  spinnerVisible$: Observable<boolean>;

  constructor(
    spinnerService: SpinnerService
  ) {
    this.spinnerVisible$ = spinnerService.visibility;
  }
}
