import { Component, OnInit } from '@angular/core';

import { AddBoardComponent } from 'src/app/components/modals/add-board/add-board.component';

import { BoardsService } from 'src/app/core/services/boards.service';
import { ModalService } from 'src/app/shared/modules/modal/modal.service';
import { ReloadService } from 'src/app/core/services/reload.service';

import { Board } from 'src/app/core/models';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public boardsList: Board[];
  public searchText: string;

  constructor(
    private boardsService: BoardsService,
    private modalService: ModalService,
    private reloadService: ReloadService
  ) { }

  async ngOnInit(): Promise<any> {
    this.reloadService.reloadDashboard$.asObservable().subscribe(async () => {
      this.boardsList = await this.getBoards();
    });
    this.boardsList = await this.getBoards();
  }

  async getBoards(): Promise<any> {
    return await this.boardsService.getBoards();
  }

  async handleBoardDeleted(): Promise<void> {
    this.boardsList = await this.getBoards();
  }

  handleSearchText(updatedText: string) {
    this.searchText = updatedText;
  }

  createAddBoardModal(): void {
    const modalRef = this.modalService.open(AddBoardComponent, { title: 'Create board modal' });

    modalRef.onResult().subscribe(
      closed => console.log('closed', closed),
      dismissed => console.log('dismissed', dismissed),
      () => console.log('completed')
    );
  }
}
