import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() searchText: string;
  @Output() handleSearchText = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeSearchText(updatedText: string) {
    debounceTime(1000);
    this.handleSearchText.emit(updatedText);
  }

  clearText() {
    this.searchText = '';
    this.handleSearchText.emit('');
  }

}
