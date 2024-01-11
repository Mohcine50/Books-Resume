import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBookOpen,
  faUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Observable, map, pipe } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'dashboard-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faBookOpen = faBookOpen;
  faSearch = faSearch;
  user?: string;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  logout = () => {
    this.authService.logout().subscribe(() => {
      localStorage.removeItem('accessToken');
    });
  };
}
