import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalService } from 'src/app/shared/modules/modal/modal.service';
import { BoardsService } from 'src/app/core/services/boards.service';

import { Board, User, Column } from 'src/app/core/models';

import { EditTaskComponent } from 'src/app/components/modals/edit-task/edit-task.component';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.scss']
})
export class BoardDetailComponent implements OnInit {
  private boardId: string;
  private boardTitle: string;

  private boardInfo: Board;
  private columns: Column[];
  private users: User[];

  constructor(
    private route: ActivatedRoute,
    private modalService: ModalService,
    private boardsService: BoardsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async params => {
      const boardId = params['id'];
      this.boardId = boardId;

      this.getBoardInfo(boardId);
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

  createAddTaskModal(modalOptions: any): void {
    const modalRef = this.modalService.open(EditTaskComponent, modalOptions);

    modalRef.onResult().subscribe(
      closed => console.log('closed', closed),
      dismissed => console.log('dismissed', dismissed),
      () => console.log('completed')
    );
  }
}
