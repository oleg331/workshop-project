import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardDetailComponent } from '../board-detail/board-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BoardDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardDetailRoutingModule {}
