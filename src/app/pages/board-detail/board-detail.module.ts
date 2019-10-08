import { NgModule } from '@angular/core';

import { BoardDetailComponent } from './board-detail.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { BoardDetailRoutingModule } from './board-detail-routing.module';

@NgModule({
  declarations: [BoardDetailComponent],
  imports: [
    SharedModule,
    BoardDetailRoutingModule
  ]
})
export class BoardDetailModule { }
