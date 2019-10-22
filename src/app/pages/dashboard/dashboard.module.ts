import { NgModule } from '@angular/core';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { ContainerComponent } from './container/container.component';
import { BoardComponent } from '../../components/board/board.component';
import { SearchComponent } from '../../components/search/search.component';

import { FilterByBoardPipe } from '../../shared/pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    ContainerComponent,
    BoardComponent,
    SearchComponent,
    FilterByBoardPipe,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SimpleNotificationsModule.forRoot()
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {}
