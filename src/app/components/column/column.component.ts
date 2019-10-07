import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'src/app/core/models/board.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() column: Column;

  constructor() { }

  ngOnInit() {
    console.log('column', this.column)
  }

}
