import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', async () => {
  let service: UserService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    })
  );

  service = TestBed.get(UserService);

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });
});
