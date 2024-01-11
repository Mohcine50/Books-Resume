import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}

  testGetAllUsers = () => {
    this.authService.testGetAllUsers().subscribe();
  };
}
