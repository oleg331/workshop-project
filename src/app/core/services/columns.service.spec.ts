import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ColumnsService } from './columns.service';

describe('ColumnsService', async () => {
  let service: ColumnsService;
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ColumnsService]
    })
  );

  service = TestBed.get(ColumnsService);
  httpMock = TestBed.get(HttpTestingController);

  it('should be created a column', async () => {
    const result = await service.addColumn(':id', 'title');
    expect(result.title).toBe('Column title');
  });
});
