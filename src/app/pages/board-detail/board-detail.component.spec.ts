import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { BoardDetailComponent } from './board-detail.component';
import { ContainerComponent } from './container/container.component';
import { UsersComponent } from 'src/app/components/users/users.component';
import { ColumnComponent } from 'src/app/components/column/column.component';
import { TaskComponent } from 'src/app/components/task/task.component';

describe('BoardDetailComponent', () => {
  let component: BoardDetailComponent;
  let fixture: ComponentFixture<BoardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterModule.forRoot([])],
      declarations: [
        BoardDetailComponent,
        ContainerComponent,
        UsersComponent,
        ColumnComponent,
        TaskComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
