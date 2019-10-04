import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../components/header/header.module';

import { DashboardComponent } from './dashboard.component';
import { ContainerComponent } from './container/container.component';
import { BoardComponent } from '../components/board/board.component';

import { FilterByBoardPipe } from '../shared/pipes';
import { SearchComponent } from '../components/search/search.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ContainerComponent,
    BoardComponent,
    SearchComponent,
    FilterByBoardPipe
  ],
  imports: [CommonModule, HeaderModule, SharedModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}
