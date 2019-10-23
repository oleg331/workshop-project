import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { TasksService } from './tasks.service';

describe('TasksService', async () => {
  let service: TasksService;
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TasksService]
    })
  );

  service = TestBed.get(TasksService);
  httpMock = TestBed.get(HttpTestingController);

  it('should be created a task', async () => {
    const result = await service.addTask(':id', 'title');
    expect(result.title).toBe('Column title');
  });
});
