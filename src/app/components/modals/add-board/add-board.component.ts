import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BoardsService } from 'src/app/core/services/boards.service';
import { ReloadService } from 'src/app/core/services/reload.service';

import { Modal } from 'src/app/shared/modules/modal/modal.model';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent extends Modal implements OnInit {
  public authForm: FormGroup;

  title: string;
  boardTitle: string;

  constructor(
    private boardsService: BoardsService,
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
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.authForm.controls[controlName].hasError(errorName);
  }

  public checkFormValidation = (title: string) => {
    if (this.authForm.valid) {
      this.createBoard(title);
    }
  }

  async createBoard(title: string): Promise<any> {
    await this.boardsService.createBoard(title);
    this.reloadService.reloadDashboard$.next();
    this.save();
  }

  save(): void {
    this.close('saving');
  }

  cancel(): void {
    this.dismiss('cancelling');
  }

}
