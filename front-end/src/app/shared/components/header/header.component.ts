import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBookOpen,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../services/auth.service';
import { Observable, map, pipe } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Init } from 'v8';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  faBookOpen = faBookOpen;
  faRightToBracket = faRightToBracket;
  isAuthenticated$!: Observable<boolean>;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthenticated();
  }

  logout = () => {
    this.authService.logout().subscribe(() => {
      localStorage.removeItem('accessToken');
    });
  };
}
