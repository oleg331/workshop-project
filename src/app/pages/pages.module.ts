import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

import { BoardEditComponent } from '../components/modals/board-edit/board-edit.component';
import { TaskDetailComponent } from '../components/task/task-detail/task-detail.component';

import { ReversePipe } from '../shared/pipes';

@NgModule({
  imports: [SharedModule, PagesRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    PagesComponent,
    BoardEditComponent,
    TaskDetailComponent,
    ReversePipe
  ],
  entryComponents: [BoardEditComponent, TaskDetailComponent]
})
export class PagesModule {}
