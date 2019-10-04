import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import { ApiService } from './api.service';

import { APIUrl } from '../contants';

import { Response, UserInfo, AuthData } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService extends ApiService {
    private currentUserSubject: BehaviorSubject<any>;
    private currentUser: AuthData;
    private token: string;

    constructor(
        http: HttpClient,
        public jwtHelper: JwtHelperService,
        public router: Router
    ) {
        super(http);
        const token = localStorage.getItem('token');
        this.currentUserSubject = new BehaviorSubject<any>(token);
        this.token = token;
    }

    public get currentUserValue(): Observable<any> {
        return this.currentUserSubject.asObservable();
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }

    async auth(path: string, userInfo: UserInfo): Promise<AuthData> {
        const user = await this.postWithoutToken(`auth/${path}`, userInfo);
        this.currentUserSubject.next(user);
        this.currentUser = user;
        this.token = user.token;
        if (this.isAuthenticated()) {
            this.router.navigate(['dashboard']);
        }
        return user;
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['auth']);
        this.currentUserSubject.next(null);
    }
}
