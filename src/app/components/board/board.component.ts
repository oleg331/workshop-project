import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BoardsService } from 'src/app/core/services/boards.service';

import { Board } from 'src/app/core/models';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board: Board;
  @Output() boardDeleted = new EventEmitter<boolean>();

  public boardId: string;

  constructor(private boardsService: BoardsService) { }

  ngOnInit() {
  }

  async deleteBoard(event: Event): Promise<void> {
    event.preventDefault();

    await this.boardsService.deleteBoard(this.board._id);
    this.boardDeleted.emit(true);

  }

}
