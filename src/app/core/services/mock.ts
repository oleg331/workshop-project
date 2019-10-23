import { BehaviorSubject } from 'rxjs';

export class MockSpinnerService {
  visibility = new BehaviorSubject<boolean>(false);
  show() {}
  hide() {}
}
