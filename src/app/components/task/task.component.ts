import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TasksService } from 'src/app/core/services/tasks.service';
import { ModalService } from 'src/app/shared/modules/modal/modal.service';
import { ReloadService } from 'src/app/core/services/reload.service';

import { Task } from 'src/app/core/models/board.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() taskDeleted = new EventEmitter<boolean>();
  @Output() taskEdited = new EventEmitter<any>();

  constructor(
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {}

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
}
