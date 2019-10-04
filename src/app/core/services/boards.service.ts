import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { ApiService } from './api.service';
import { Board } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BoardsService extends ApiService {
  private boardsListSubject: BehaviorSubject<Board[]>;

  constructor(http: HttpClient) {
    super(http);

    this.boardsListSubject = new BehaviorSubject<Board[]>(null);
  }

  async getBoards(): Promise<any> {
    return await this.get('boards');
  }

  createBoard(title: string): Promise<any> {
    return this.post('boards', { title });
  }

  deleteBoard(id: string): Promise<any> {
    return this.delete(`boards/${id}`);
  }
}
