import { Component, OnInit } from '@angular/core';

import { BoardAddComponent } from 'src/app/components/modals/board-add/board-add.component';

import { BoardsService } from 'src/app/core/services/boards.service';
import { ModalService } from 'src/app/shared/modules/modal/modal.service';
import { ReloadService } from 'src/app/core/services/reload.service';
import { ToastrService } from 'ngx-toastr';

import { Board } from 'src/app/core/models';
import { NotificationService } from 'src/app/core/services/notification.service';

import { trackById } from 'src/app/core/utils';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public boardsList: Board[];
  public searchText: string;

  trackByBoardId = trackById;

  constructor(
    private notificationService: NotificationService,
    private boardsService: BoardsService,
    private modalService: ModalService,
    private reloadService: ReloadService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.init();
  }

  async init(): Promise<void> {
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

  addBoard() {
    const modalOptions = {
      type: 'board',
      title: 'Create board modal'
    };

    this.createAddBoardModal(modalOptions);
  }

  createAddBoardModal(modalOptions: any): void {
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
