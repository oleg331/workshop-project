import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalService } from '../../../shared/modules/modal/modal.service';
import { BoardsService } from '../../../core/services/boards.service';
import { ReloadService } from 'src/app/core/services/reload.service';

import { Board, User, Column, Task } from '../../../core/models';

import { BoardEditComponent } from '../../../components/modals/board-edit/board-edit.component';
import { BoardAddComponent } from 'src/app/components/modals/board-add/board-add.component';
import { TaskDetailComponent } from 'src/app/components/task/task-detail/task-detail.component';

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

  private isTaskModalOpened = false;

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

      await this.getBoardInfo(boardId);
    });

    this.reloadService.reloadDashboard$.asObservable().subscribe(async () => {
      const board = await this.getBoardInfo(this.boardId);

      if (this.isTaskModalOpened) {
        this.reloadService.reloadTaskDetail$.next(board);
      }
    });
  }

  async getBoardInfo(boardId: string): Promise<any> {
    const boardInfo = await this.boardsService.getBoard(boardId);

    this.boardInfo = boardInfo;

    this.boardTitle = boardInfo.title;
    this.users = boardInfo.users;
    this.columns = boardInfo.columns;

    this.reloadService.reloadTaskDetail$.next(boardInfo);

    return boardInfo;
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

  subscribeModalRef(modalRef: any): void {
    modalRef
      .onResult()
      .subscribe(
        closed => console.log('closed', closed),
        dismissed => {
          console.log('dismissed', dismissed);
          this.isTaskModalOpened = false;
        },
        () => console.log('completed')
      );
  }

  createBoardEditModal(modalOptions: any): void {
    const modalRef = this.modalService.open(BoardEditComponent, modalOptions);
    this.subscribeModalRef(modalRef);
  }

  createBoardAddModal(modalOptions: any): void {
    const modalRef = this.modalService.open(BoardAddComponent, modalOptions);
    this.subscribeModalRef(modalRef);
  }

  createTaskDetailModal(modalOptions: any): void {
    this.isTaskModalOpened = true;

    const modalRef = this.modalService.open(TaskDetailComponent, modalOptions);
    this.subscribeModalRef(modalRef);
  }

  trackByColumnId(index: string, column: Column): string {
    return column._id;
  }

  trackByTaskId(index: string, task: Task): string {
    return task._id;
  }
}
