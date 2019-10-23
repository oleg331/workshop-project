import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let jwtHelper: JwtHelperService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent, LoginComponent, RegisterComponent],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: () => {
              return '';
            }
          }
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    jwtHelper = TestBed.get(JwtHelperService);
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
