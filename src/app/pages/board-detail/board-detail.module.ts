import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { BoardDetailRoutingModule } from './board-detail-routing.module';

import { BoardDetailComponent } from './board-detail.component';
import { UsersComponent } from 'src/app/components/users/users.component';
import { ColumnComponent } from 'src/app/components/column/column.component';
import { TaskComponent } from 'src/app/components/task/task.component';
import { EditTaskComponent } from 'src/app/components/modals/edit-task/edit-task.component';

@NgModule({
  declarations: [
    BoardDetailComponent,
    UsersComponent,
    ColumnComponent,
    TaskComponent,
    EditTaskComponent
  ],
  entryComponents: [EditTaskComponent],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BoardDetailRoutingModule
  ],
  exports: [BoardDetailComponent]
})
export class BoardDetailModule {}
