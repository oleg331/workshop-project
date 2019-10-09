import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserService } from 'src/app/core/services';

import { User } from 'src/app/core/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() users: User[];
  @Input() boardId: string;
  @Output() userAdded = new EventEmitter<any>();
  @Output() userDeleted = new EventEmitter<boolean>();

  usersList: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  async getAllUsers(): Promise<any> {
    const response = await this.userService.getAllUsers();
    this.usersList = response.users;
  }

  addUser() {
    this.userAdded.emit({
      id: this.boardId,
      type: 'user',
      title: 'Add user modal',
      usersList: this.usersList
    });
  }

  async deleteUser(userId: string): Promise<void> {
    await this.userService.toggleUserOnBoard(this.boardId, userId);
    this.userDeleted.emit(true);
  }

}
