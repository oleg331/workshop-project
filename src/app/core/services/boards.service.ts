import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { ApiService } from './api.service';
import { Board, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BoardsService extends ApiService {
  boardsList$: BehaviorSubject<Board[]>;

  constructor(http: HttpClient) {
    super(http);

    this.boardsList$ = new BehaviorSubject<Board[]>([]);
  }

  async getBoards(): Promise<Board[]> {
    return await this.get('boards');
  }

  async getBoard(boardId: string): Promise<Board> {
    return await this.get(`boards/${boardId}`);
  }

  createBoard(title: string): Promise<Board[]> {
    return this.post('boards', { title });
  }

  deleteBoard(id: string): Promise<Board> {
    return this.delete(`boards/${id}`);
  }

  updateBoard(id: string, body: any): Promise<Board> {
    return this.put(`boards/${id}`, body);
  }

  toggleUserOnBoard(id: string, body: any): Promise<User> {
    return this.patch(`tasks/${id}`, body);
  }
}
