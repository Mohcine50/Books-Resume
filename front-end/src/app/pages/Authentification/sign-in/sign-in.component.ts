import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  login = (e: Event) => {
    e.preventDefault();
    this.authService
      .login(
        this.signInForm.controls['username'].value as string,
        this.signInForm.controls['password'].value as string
      )
      .subscribe({
        next: (response) => {
          if (response.Message === 'Login Successfully') {
            localStorage.setItem('accessToken', response.accessToken);
            this.authService.setAuthentication(true);
            this.router.navigate(['/dashboard']);
          }
        },
      });
  };
}
