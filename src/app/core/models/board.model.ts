import { random } from 'lodash';

import { User } from './response.model';

export interface Board {
  _id: string;
  title: string;
  users: User[];
  columns: Column[];
}

export interface Column {
  _id: string;
  title: string;
  tasks: Task[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Task {
  title(title: any);
  _id: string;
  task: string;
  users: User[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  _id: string;
  email: string;
  name: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const testBoard: Board = {
  _id: `randon_id_${random(1, 1000)}`,
  title: 'title',
  users: [],
  columns: []
};
