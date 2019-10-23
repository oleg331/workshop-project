import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { ContainerComponent } from './container.component';
import { UsersComponent } from 'src/app/components/users/users.component';
import { ColumnComponent } from 'src/app/components/column/column.component';
import { TaskComponent } from 'src/app/components/task/task.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent],
      imports: [SharedModule, RouterModule.forRoot([])],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
