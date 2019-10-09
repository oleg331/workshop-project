import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TasksService } from 'src/app/core/services/tasks.service';
import { ColumnsService } from 'src/app/core/services/columns.service';
import { BoardsService } from 'src/app/core/services/boards.service';
import { ReloadService } from 'src/app/core/services/reload.service';

import { Modal } from 'src/app/shared/modules/modal/modal.model';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.scss']
})
export class BoardEditComponent extends Modal implements OnInit {
  public authForm: FormGroup;

  id: string;
  type: string;
  title: string;
  oldTitle: string;

  constructor(
    private tasksService: TasksService,
    private columnsService: ColumnsService,
    private boardsService: BoardsService,
    private reloadService: ReloadService
  ) {
    super();
  }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      title: new FormControl(this.oldTitle, Validators.required),
    });
  }

  onInjectInputs(inputs: any): void {
    this.id = inputs.id;
    this.type = inputs.type;
    this.title = inputs.title;
    this.oldTitle = inputs.oldTitle;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.authForm.controls[controlName].hasError(errorName);
  }

  public checkFormValidation = (title: string) => {
    if (this.authForm.valid) {
      this.edit(title);
    }
  }

  async edit(title: string): Promise<any> {
    switch (this.type) {
      case 'task': {
        await this.tasksService.updateTask(this.id, { task: title });
        break;
      }
      case 'column': {
        await this.columnsService.updateColumn(this.id, { title });
        break;
      }
      case 'board': {
        await this.boardsService.updateBoard(this.id, { title });
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
