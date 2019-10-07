import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ColumnsService } from 'src/app/core/services/columns.service';

import { Column } from 'src/app/core/models/board.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() column: Column;
  @Output() columnDeleted = new EventEmitter<boolean>();
  @Output() columnEdited = new EventEmitter<any>();
  @Output() taskAdded = new EventEmitter<any>();

  constructor(private columnsService: ColumnsService) { }

  ngOnInit() {
  }

  async deleteColumn(): Promise<void> {
    await this.columnsService.deleteColumn(this.column._id);
    this.columnDeleted.emit(true);
  }

  editColumn(): void {
    this.columnEdited.emit({
      id: this.column._id,
      type: 'column',
      title: 'Edit column modal',
      oldTitle: this.column.title,
    });
  }

  addTask(): void {
    this.taskAdded.emit({
      id: this.column._id,
      type: 'task',
      title: 'Add task modal'
    });
  }

}
