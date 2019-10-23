import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Task, Board } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {
  reloadDashboard$: Subject<any> = new Subject<any>();
  reloadBoard$: Subject<any> = new Subject<any>();
  reloadTaskDetail$: Subject<Board> = new Subject<Board>();

  constructor() { }
}
