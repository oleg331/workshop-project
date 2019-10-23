import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksService } from 'src/app/core/services/tasks.service';
import { ReloadService } from 'src/app/core/services/reload.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

import { TaskDetailComponent } from './task-detail.component';
import { ReversePipe } from 'src/app/shared/pipes';

describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;
  let jwtHelper: TaskDetailComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDetailComponent, ReversePipe],
      providers: [TasksService, ReloadService],
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
    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
