import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public boards = [
    { name: 'Board 1' },
    { name: 'Board 2' },
    { name: 'Board 3' },
    { name: 'Board 4' },
    { name: 'Board 5' },
    { name: 'Board 6' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
