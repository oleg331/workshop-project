import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { SpinnerService } from './core/services/spinner.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MaterialModule],
      declarations: [AppComponent],
      providers: [SpinnerService]
    }).compileComponents();
  }));

  it('should be created', inject([SpinnerService], (service: SpinnerService) => {
    expect(service).toBeTruthy();
  }));

  it('should have show/hide spinner', inject([SpinnerService], (service: SpinnerService) => {
    expect(service.show).toBeTruthy();
    expect(service.hide).toBeTruthy();
  }));
});
