import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { ContainerComponent } from './container/container.component';
import { BoardComponent } from '../../components/board/board.component';

import { SearchComponent } from '../../components/search/search.component';
import { AddBoardComponent } from '../../components/modals/add-board/add-board.component';

import { FilterByBoardPipe } from '../../shared/pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    ContainerComponent,
    BoardComponent,
    SearchComponent,
    AddBoardComponent,
    FilterByBoardPipe
  ],
  entryComponents: [AddBoardComponent],
  imports: [SharedModule, FormsModule, ReactiveFormsModule, DashboardRoutingModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}
