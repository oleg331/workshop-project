import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {
  reloadDashboard$: Subject<any> = new Subject<any>();

  constructor() { }
}
