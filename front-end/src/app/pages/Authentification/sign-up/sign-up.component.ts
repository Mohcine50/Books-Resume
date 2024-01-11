import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) {}

  SignUp = (e: Event) => {
    e.preventDefault();
    const username = this.signUpForm.controls['username'].value as string;
    const email = this.signUpForm.controls['email'].value as string;
    const password = this.signUpForm.controls['password'].value as string;
    const confirmPassword = this.signUpForm.controls['confirmPassword']
      .value as string;
    if (confirmPassword !== password) alert('check your passwords');
    else
      this.authService.register({ username, email, password }).subscribe({
        next: (response) => {
          if (response.Message === 'REGISTER SUCCESSFULLY') {
            this.router.navigate(['/sign-in']);
          }
        },
      });
  };
}
