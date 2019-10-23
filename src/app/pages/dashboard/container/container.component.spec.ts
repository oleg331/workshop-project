import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { ContainerComponent } from './container.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { BoardComponent } from 'src/app/components/board/board.component';

import { FilterByBoardPipe } from 'src/app/shared/pipes';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let jwtHelper: JwtHelperService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContainerComponent,
        SearchComponent,
        BoardComponent,
        FilterByBoardPipe
      ],
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
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
