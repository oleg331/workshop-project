import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { BoardComponent } from 'src/app/components/board/board.component';

import { FilterByBoardPipe } from 'src/app/shared/pipes';

import { BoardsService } from 'src/app/core/services/boards.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let jwtHelper: JwtHelperService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        ContainerComponent,
        SearchComponent,
        BoardComponent,
        FilterByBoardPipe
      ],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        SharedModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: () => {
              return '';
            }
          }
        })
      ],
      providers: [BoardsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    jwtHelper = TestBed.get(JwtHelperService);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
