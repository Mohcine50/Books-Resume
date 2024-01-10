import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './authentification.component.html',
})
export class AuthentificationComponent {}
