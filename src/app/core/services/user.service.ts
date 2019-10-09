import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  async getAllUsers(): Promise<any> {
    return await this.get(`users`);
  }

  toggleUserOnBoard(boardId: string, userId: string): Promise<any> {
    return this.patch(`boards/${boardId}`, { userId });
  }

  toggleUserOnTask(taskId: string, userId: string): Promise<any> {
    return this.patch(`tasks/${taskId}`, { userId });
  }
}
