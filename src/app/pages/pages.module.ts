import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

import { BoardEditComponent } from '../components/modals/board-edit/board-edit.component';
import { AddBoardComponent } from '../components/modals/add-board/add-board.component';
import { BoardAddComponent } from '../components/modals/board-add/board-add.component';

@NgModule({
  imports: [SharedModule, PagesRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    PagesComponent,
    BoardEditComponent,
    AddBoardComponent,
    BoardAddComponent
  ],
  entryComponents: [BoardEditComponent, AddBoardComponent, BoardAddComponent]
})
export class PagesModule {}
