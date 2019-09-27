import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import { APIUrl } from '../contants';

import { Response, UserInfo } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<any>;
    private currentUser: any;

    constructor(
        private http: HttpClient,
        public jwtHelper: JwtHelperService,
        public router: Router
    ) {
        const user = JSON.parse(localStorage.getItem('token'));
        this.currentUserSubject = new BehaviorSubject<any>(user);
        this.currentUser = user;
    }

    public get currentUserValue(): Observable<any> {
        return this.currentUserSubject.asObservable();
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }

    auth(typeAuth: string, userInfo: UserInfo): Promise<any> {
        return this.http.post(`${APIUrl}/auth/${typeAuth}`, userInfo)
            .pipe(map((response: Response) => {
                const data = response.data;
                localStorage.setItem('token', JSON.stringify(data.token));
                localStorage.setItem('user', JSON.stringify(data.user));
                this.currentUserSubject.next(data.user);
                this.router.navigate(['dashboard']);
                return data.user;
            }))
            .toPromise();
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['auth']);
        this.currentUserSubject.next(null);
    }
}
