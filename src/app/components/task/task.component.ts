import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { TasksService } from 'src/app/core/services/tasks.service';
import { ReloadService } from 'src/app/core/services/reload.service';

import { Task, Board, Column } from 'src/app/core/models/board.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() columnId: string;
  @Output() taskDeleted = new EventEmitter<boolean>();
  @Output() taskEdited = new EventEmitter<any>();
  @Output() taskViewed = new EventEmitter<any>();
  @Output() taskUpdated = new EventEmitter<any>();

  private isModalOpened = false;
  private task$ = new BehaviorSubject({});

  constructor(
    private tasksService: TasksService,
    private reloadService: ReloadService
  ) {
  }

  ngOnInit(): void {
  }

  async deleteTask(): Promise<void> {
    await this.tasksService.deleteTask(this.task._id);
    this.taskDeleted.emit(true);
  }

  editTask(): void {
    this.taskEdited.emit({
      id: this.task._id,
      type: 'task',
      title: 'Edit task modal',
      oldTitle: this.task.task
    });
  }

  viewTask(): void {
    this.taskViewed.emit({
      ...this.task,
      columnId: this.columnId
    });
  }
}
