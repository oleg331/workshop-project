import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', async () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    })
  );

  service = TestBed.get(UserService);
  httpMock = TestBed.get(HttpTestingController);

  it('should be recieve all users', async () => {
    const result = await service.getAllUsers();
    expect(result).toBe('Users array');
  });
});
