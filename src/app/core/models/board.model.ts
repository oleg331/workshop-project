import { User } from './response.model';

export interface Board {
  _id: string;
  title: string;
  users: User[];
  columns: Column[];
}

interface Column {
  _id: string;
  title: string;
  tasks: Task[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Task {
  _id: string;
  task: string;
  users: User[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

interface Comment {
  _id: string;
  email: string;
  name: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
