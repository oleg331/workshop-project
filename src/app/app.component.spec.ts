import {
  TestBed,
  async,
  inject,
  ComponentFixture
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { SpinnerService } from './core/services/spinner.service';
import { MockSpinnerService } from './core/services/mock';
import { Observable, of } from 'rxjs';

describe('AppComponent', () => {
  let mockSpinnerService;
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MaterialModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: SpinnerService,
          useClass: MockSpinnerService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    mockSpinnerService = fixture.debugElement.injector.get(SpinnerService);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize spinner', () => {
    expect(component.spinnerVisible$).toEqual(jasmine.any(Observable));
  });
});
