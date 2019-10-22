import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';

import { Column } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ColumnsService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  addColumn(id: string, body: any): Promise<Column> {
    return this.post(`columns/${id}`, body);
  }

  deleteColumn(id: string): Promise<Column> {
    return this.delete(`columns/${id}`);
  }

  updateColumn(id: string, body: any): Promise<Column> {
    return this.put(`columns/${id}`, body);
  }
}
