import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/core/services';
import { TasksService } from 'src/app/core/services/tasks.service';
import { ColumnsService } from 'src/app/core/services/columns.service';
import { ReloadService } from 'src/app/core/services/reload.service';

import { Modal } from 'src/app/shared/modules/modal/modal.model';

import { User } from 'src/app/core/models';

@Component({
  selector: 'app-board-add',
  templateUrl: './board-add.component.html',
  styleUrls: ['./board-add.component.scss']
})
export class BoardAddComponent extends Modal implements OnInit {
  public addForm: FormGroup;

  id: string;
  type: string;
  title: string;
  usersList: User[];

  constructor(
    private userService: UserService,
    private tasksService: TasksService,
    private columnsService: ColumnsService,
    private reloadService: ReloadService
  ) {
    super();
  }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      value: new FormControl('', Validators.required)
    });
  }

  onInjectInputs(inputs: any): void {
    this.id = inputs.id;
    this.type = inputs.type;
    this.title = inputs.title;
    this.usersList = inputs.usersList;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.addForm.controls[controlName].hasError(errorName);
  }

  public checkFormValidation = (value: string) => {
    if (this.addForm.valid) {
      this.add(value);
    }
  }

  async add(value: any): Promise<any> {
    switch (this.type) {
      case 'user': {
        await this.userService.toggleUserOnBoard(this.id, value);
        break;
      }
      case 'column': {
        await this.columnsService.addColumn(this.id, { title: value });
        break;
      }
      case 'task': {
        await this.tasksService.addTask(this.id, { task: value });
        break;
      }
      case 'user-task': {
        break;
      }
    }

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
