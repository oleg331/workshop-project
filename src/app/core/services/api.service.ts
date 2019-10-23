import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { APIUrl } from '../contants';

import { AuthData, User } from '../models';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private options: {
    headers: HttpHeaders;
  };

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token') || '';
    this.options = {
      headers: new HttpHeaders({
        authorization: token
      })
    };
  }

  setToken(token: string): void {
    this.options.headers.set('authorization', token);
    localStorage.setItem('token', token);
  }

  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserInfo() {
    const user = localStorage.getItem('user');
    return JSON.parse(user) as User;
  }

  resetToken(): void {
    this.options.headers.delete('authorization');
    localStorage.removeItem('token');
  }

  postWithoutToken(path: string, body: any): Promise<any> {
    return this.http.post(`${APIUrl}/${path}`, body)
      .pipe(map((response: any) => {
        if (response.success && response.data.token) {
          this.setToken(response.data.token);
          this.setUser(response.data.user);
        }
        return response.data as AuthData;
      }))
      .toPromise();
  }

  post<T>(path: string, body: any): Promise<T> {
    return this.http.post(`${APIUrl}/${path}`, body, this.options)
      .pipe(map((response: any) => response.data as T))
      .toPromise();
  }

  get<T>(path: string): Promise<T> {
    return this.http.get(`${APIUrl}/${path}`, this.options)
      .pipe(map((response: any) => response.data as T))
      .toPromise();
  }

  delete<T>(path: string, body?: any): Promise<T> {
    const options = {
      ...this.options,
      body
    };
    return this.http.delete(`${APIUrl}/${path}`, options)
      .pipe(map((response: any) => response.data as T))
      .toPromise();
  }

  put<T>(path: string, body: any): Promise<T> {
    return this.http.put(`${APIUrl}/${path}`, body, this.options)
      .pipe(map((response: any) => response.data as T))
      .toPromise();
  }

  patch<T>(path: string, body: any): Promise<T> {
    return this.http.patch(`${APIUrl}/${path}`, body, this.options)
      .pipe(map((response: any) => response.data as T))
      .toPromise();
  }
}
