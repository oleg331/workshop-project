import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { TasksService } from 'src/app/core/services/tasks.service';
import { ReloadService } from 'src/app/core/services/reload.service';

import { Modal } from 'src/app/shared/modules/modal/modal.model';
import { Task, Comment, Column, Board } from 'src/app/core/models';
import { takeUntil } from 'rxjs/operators';

import { trackById } from 'src/app/core/utils';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent extends Modal implements OnInit, OnDestroy {

  constructor(
    private tasksService: TasksService,
    private reloadService: ReloadService
  ) {
    super();
  }
  public taskDetail: FormGroup;
  destroy$: Subject<void> = new Subject<void>();

  id: string;
  columnId: string;
  title: string;
  task: Task;
  comments: Comment[];

  trackByCommentId = trackById;

  ngOnInit() {
    this.taskDetail = new FormGroup({
      comment: new FormControl('', Validators.required)
    });

    this.reloadService.reloadTaskDetail$.asObservable()
      .pipe(takeUntil(this.destroy$)).subscribe((board: Board) => {
        const taskUpdated = this.filterBoardByTask(board.columns);
        this.updateTask(taskUpdated);
      });
  }

  onInjectInputs(options: any): void {
    this.updateTask(options);
  }

  filterBoardByTask(columns: Column[]) {
    let taskFound: Task;
    columns.forEach((col: Column) => {
      const res = col.tasks.find((task: Task) => task._id === this.id);
      if (res) {
        taskFound = res;
      }
    });

    return taskFound;
  }

  updateTask(task: any) {
    this.task = task;
    this.id = task._id;
    this.columnId = task.columnId;
    this.title = task.task;
    this.comments = task.comments;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.taskDetail.controls[controlName].hasError(errorName);
  }

  public checkFormValidation = (comment: string) => {
    if (this.taskDetail.valid) {
      this.addComment(comment);
    }

    this.taskDetail.reset();
  }

  async addComment(comment: string): Promise<any> {

    const userInfo = this.tasksService.getUserInfo();

    const options = {
      comment,
      ...userInfo
    };

    await this.tasksService.addComment(this.task._id, options);
    this.reloadService.reloadDashboard$.next();
  }

  async deleteComment(commentId: string, index: number): Promise<any> {
    await this.tasksService.deleteComment(commentId, this.task._id);
    this.reloadService.reloadDashboard$.next();
  }

  save(): void {
    this.close('saving');
  }

  cancel(): void {
    this.dismiss('cancelling');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
