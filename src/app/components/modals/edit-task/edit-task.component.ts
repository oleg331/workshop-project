import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TasksService } from 'src/app/core/services/tasks.service';
import { ReloadService } from 'src/app/core/services/reload.service';

import { Modal } from 'src/app/shared/modules/modal/modal.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent extends Modal implements OnInit {
  public authForm: FormGroup;

  title: string;
  taskTitle: string;

  constructor(
    private tasksService: TasksService,
    private reloadService: ReloadService
  ) {
    super();
  }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }

  onInjectInputs(inputs: any): void {
    this.title = inputs.title;
    this.taskTitle = inputs.oldTitle;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.authForm.controls[controlName].hasError(errorName);
  }

  public checkFormValidation = (title: string) => {
    if (this.authForm.valid) {
      this.editTask(title);
    }
  }

  async editTask(title: string): Promise<any> {
    await this.tasksService.updateTask(title);
    this.reloadService.reloadBoard$.next();
    this.save();
  }

  save(): void {
    this.close('saving');
  }

  cancel(): void {
    this.dismiss('cancelling');
  }

}
