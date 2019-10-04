import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentLayoutComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: HTMLDocument,
  ) {}

  get styles() {
    const header: HTMLElement = this.document.getElementById('header');

    return {
      'padding-top.px': header.offsetHeight,
    };
  }

  ngOnInit() {}
}
