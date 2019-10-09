import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';

import { User } from '../models';

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

  addTask(id: string, body: any): Promise<any> {
    return this.post(`tasks/${id}`, body);
  }

  deleteTask(id: string): Promise<any> {
    return this.delete(`tasks/${id}`);
  }

  updateTask(id: string, body: any): Promise<any> {
    return this.put(`tasks/${id}`, body);
  }

  addComment(id: string, body: any): Promise<any> {
    return this.post(`comments/${id}`, body);
  }

  deleteComment(commentId: string, taskId: string): Promise<any> {
    return this.delete(`comments/${commentId}`, { taskId });
  }
}
