import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../components/header/header.component';
import { ContainerComponent } from './container/container.component';
import { BoardComponent } from '../components/board/board.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    ContainerComponent,
    BoardComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}
