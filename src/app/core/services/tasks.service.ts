import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  deleteTask(id: string): Promise<any> {
    return this.delete(`tasks/${id}`);
  }

  updateTask(id: string): Promise<any> {
    return this.put(`tasks/${id}`);
  }
}
