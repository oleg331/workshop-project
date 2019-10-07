import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalService } from '../../../shared/modules/modal/modal.service';
import { BoardsService } from '../../../core/services/boards.service';
import { ReloadService } from 'src/app/core/services/reload.service';

import { Board, User, Column } from '../../../core/models';

import { BoardEditComponent } from '../../../components/modals/board-edit/board-edit.component';
import { BoardAddComponent } from 'src/app/components/modals/board-add/board-add.component';

@Component({
  selector: 'app-board-detail-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  private boardTitle: string;
  private boardId: string;

  private boardInfo: Board;
  private columns: Column[];
  private users: User[];

  constructor(
    private route: ActivatedRoute,
    private modalService: ModalService,
    private boardsService: BoardsService,
    private reloadService: ReloadService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      const boardId = params['id'];
      this.boardId = boardId;

      this.getBoardInfo(boardId);
    });

    this.reloadService.reloadBoard$.asObservable().subscribe(async () => {
      this.getBoardInfo(this.boardId);
    });
  }

  async getBoardInfo(boardId: string) {
    const boardInfo = await this.boardsService.getBoard(boardId);

    this.boardInfo = boardInfo;

    this.boardTitle = boardInfo.title;
    this.users = boardInfo.users;
    this.columns = boardInfo.columns;
  }

  handleItemDeleted(): void {
    this.getBoardInfo(this.boardId);
  }

  updateBoard() {
    const boardOptions = {
      id: this.boardId,
      type: 'board',
      title: 'Edit board modal',
      oldTitle: this.boardTitle
    };

    this.createBoardEditModal(boardOptions);
  }

  addColumn() {
    const modalOptions = {
      id: this.boardId,
      type: 'column',
      title: 'Add column modal'
    };

    this.createBoardAddModal(modalOptions);
  }

  createBoardEditModal(modalOptions: any): void {
    const modalRef = this.modalService.open(BoardEditComponent, modalOptions);

    modalRef
      .onResult()
      .subscribe(
        closed => console.log('closed', closed),
        dismissed => console.log('dismissed', dismissed),
        () => console.log('completed')
      );
  }

  createBoardAddModal(modalOptions: any): void {
    const modalRef = this.modalService.open(BoardAddComponent, modalOptions);

    modalRef
      .onResult()
      .subscribe(
        closed => console.log('closed', closed),
        dismissed => console.log('dismissed', dismissed),
        () => console.log('completed')
      );
  }
}
