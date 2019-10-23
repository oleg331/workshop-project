import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [ApiService]
    });
    apiService = TestBed.get(ApiService);
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });
});
