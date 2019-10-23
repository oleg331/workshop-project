import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

import { SharedModule } from 'src/app/shared/shared.module';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let jwtHelper: JwtHelperService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent],
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
  }));

  beforeEach(() => {
    jwtHelper = TestBed.get(JwtHelperService);
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
