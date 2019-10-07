import { Component, OnInit, Input } from '@angular/core';

import { User } from 'src/app/core/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() users: User[];

  constructor() { }

  ngOnInit() {
    console.log('users', this.users);
  }

}
