import { Pipe, PipeTransform } from '@angular/core';

import { Board } from 'src/app/core/models';

@Pipe({
  name: 'filterByBoard'
})
export class FilterByBoardPipe implements PipeTransform {
  transform(boards: Board[], searchText: string): any {
    if (!boards) { return []; }
    if (!searchText) { return boards; }

    searchText = searchText.toLowerCase();
    return boards.filter((board: Board) => {
      return board.title.toLowerCase().includes(searchText);
    });
  }
}
