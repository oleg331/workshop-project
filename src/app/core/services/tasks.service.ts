import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';

import { User, Task, Comment } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  getUser(): User {
    return this.getUserInfo();
  }

  addTask(id: string, body: any): Promise<Task> {
    return this.post(`tasks/${id}`, body);
  }

  deleteTask(id: string): Promise<Task> {
    return this.delete(`tasks/${id}`);
  }

  updateTask(id: string, body: any): Promise<Task> {
    return this.put(`tasks/${id}`, body);
  }

  addComment(id: string, body: any): Promise<Comment> {
    return this.post(`comments/${id}`, body);
  }

  deleteComment(commentId: string, taskId: string): Promise<Comment> {
    return this.delete(`comments/${commentId}`, { taskId });
  }
}
