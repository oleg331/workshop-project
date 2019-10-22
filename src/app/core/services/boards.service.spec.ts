import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { BoardsService } from './boards.service';

describe('BoardsService', async () => {
  let service: BoardsService;
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BoardsService]
    })
  );

  service = TestBed.get(BoardsService);
  httpMock = TestBed.get(HttpTestingController);

  it('should get boards array data', async () => {
    const result = await service.getBoard(':id');
    expect(result.title).toBe('Board title');
  });
});
