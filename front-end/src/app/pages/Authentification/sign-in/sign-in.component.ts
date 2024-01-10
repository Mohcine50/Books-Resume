import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  constructor() {}

  signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  login = (e: Event) => {
    e.preventDefault();
  };
}
