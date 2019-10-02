import { Component, OnInit } from '@angular/core';

import { BoardsService } from 'src/app/core/services/boards.service';

import { Board } from 'src/app/core/models';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public boardsList: Board[];
  public searchText: string;

  constructor(private boardsService: BoardsService) { }

  async ngOnInit() {
    this.boardsList = await this.getBoards();
  }

  getBoards() {
    return this.boardsService.getBoards();
  }

  async handleBoardDeleted() {
    this.boardsList = await this.getBoards();
  }

  handleSearchText(updatedText: string) {
    this.searchText = updatedText;
  }



}
