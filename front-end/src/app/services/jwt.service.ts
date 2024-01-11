import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private jwtHelper: JwtHelperService;
  constructor() {
    this.jwtHelper = new JwtHelperService();
  }

  decodeToken(token: string): any {
    return this.jwtHelper.decodeToken(token);
  }

  getUserFromToken(token: any): string {
    return token.sub;
  }

  isTokenExpired(token: any) {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (!token || !token.exp) {
      return true;
    }

    return currentTimestamp > token.exp;
  }
}
