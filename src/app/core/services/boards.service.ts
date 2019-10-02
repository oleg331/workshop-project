import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { Board } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BoardsService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  getBoards(): Promise<any> {
    return this.get('boards');
  }

  deleteBoard(id: string): Promise<any> {
    return this.delete(`boards/${id}`);
  }
}
