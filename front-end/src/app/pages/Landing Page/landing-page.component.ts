import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeroComponent],
})
export class LandingPageComponent {}
