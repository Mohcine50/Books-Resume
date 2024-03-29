import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';
import { loginType, registerType } from '../types';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user: string = '';
  authUrl = `http://localhost:8080/api/auth`;
  constructor(private httpClient: HttpClient, private jwtService: JwtService) {}

  testGetAllUsers(): Observable<any> {
    return this.httpClient
      .get(
        `http://localhost:8080/api/users/id/d0558db3-6dae-4fbc-9d76-9dcc6a5c4ad5`,
        { withCredentials: true }
      )
      .pipe(
        tap((response) => {
          console.log(response);
        }),
        catchError((error: any, caught: Observable<any>): Observable<any> => {
          console.error('There was an error!', error);
          return of();
        })
      );
  }

  login(body: loginType): Observable<any> {
    return this.httpClient
      .post(`${this.authUrl}/login`, JSON.stringify(body), {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
        withCredentials: true,
      })
      .pipe(
        tap((response: any) => {
          // Log the successful response
          console.log('Response:', response);
        }),
        catchError((error: any, caught: Observable<any>): Observable<any> => {
          console.error('There was an error!', error);

          // after handling error, return a new observable
          // that doesn't emit any values and completes
          return of();
        })
      );
  }

  register(body: registerType): Observable<any> {
    return this.httpClient
      .post(`${this.authUrl}/register`, JSON.stringify(body), {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
        withCredentials: true,
      })
      .pipe(
        tap((response: any) => {
          // Log the successful response
          console.log('Response:', response);
        }),
        catchError((error: any, caught: Observable<any>): Observable<any> => {
          console.error('There was an error!', error);

          // after handling error, return a new observable
          // that doesn't emit any values and completes
          return of();
        })
      );
  }

  logout(): Observable<any> {
    this.setAuthentication(false);
    return this.isAuth.asObservable();
  }

  setAuthentication(auth: boolean) {
    this.isAuth.next(auth);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuth.asObservable();
  }
  getUser(): string {
    let accessToken = localStorage.getItem('accessToken');
    let token = this.jwtService.decodeToken(accessToken!);
    this.user = this.jwtService.getUserFromToken(token);
    return this.user;
  }
}
