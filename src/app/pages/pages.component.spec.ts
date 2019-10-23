import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;
  let jwtHelper: JwtHelperService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PagesComponent],
      imports: [
        RouterTestingModule,
        SharedModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: () => {
              return '';
            }
          }
        })
      ]
    }).compileComponents();

    jwtHelper = TestBed.get(JwtHelperService);
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
