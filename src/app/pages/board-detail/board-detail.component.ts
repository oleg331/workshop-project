import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BoardsService } from 'src/app/core/services/boards.service';

import { Board, User, Column } from 'src/app/core/models';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.scss']
})
export class BoardDetailComponent implements OnInit {
  private boardId: string;

  private boardInfo: Board;
  private columns: Column[];
  private users: User[];

  constructor(
    private route: ActivatedRoute,
    private boardsService: BoardsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async params => {
      const boardId = params['id'];
      const boardInfo = await this.getBoardInfo(boardId);

      this.boardId = boardId;
      this.boardInfo = boardInfo;
      this.users = boardInfo.users;
      console.log(boardInfo.users);
      this.columns = boardInfo.columns;
    });
  }

  getBoardInfo(boardId: string) {
    return this.boardsService.getBoard(boardId);
  }

  ngOnDestroy() {}
}
