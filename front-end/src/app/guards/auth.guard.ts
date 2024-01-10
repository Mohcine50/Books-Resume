import { Injectable } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { JwtService } from '../services/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isAuthenticated: null | boolean = null;
  constructor(
    private authService: AuthService,
    private router: Router,
    private jwtService: JwtService
  ) {
    let accessToken = localStorage.getItem('accessToken');
    if (accessToken && accessToken !== null) {
      let decodedJWT = this.jwtService.decodeToken(accessToken);
      let tokenExpired = this.jwtService.isTokenExpired(decodedJWT);
      if (!tokenExpired) this.authService.setAuthentication(true);
      if (decodedJWT.exp < decodedJWT.iat)
        this.authService.setAuthentication(false);
    }
    this.authService.isAuthenticated().subscribe({
      next: (auth) => {
        this.isAuthenticated = auth;
      },
    });
  }

  canActivate(): boolean | UrlTree {
    if (this.isAuthenticated) {
      return true;
    } else {
      return this.router.createUrlTree(['/sign-in']);
    }
  }
}
