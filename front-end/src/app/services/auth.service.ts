import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  authUrl = `http://localhost:8080/api/auth`;
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };

    return this.httpClient
      .post(`${this.authUrl}/login`, JSON.stringify(body), {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
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
}
