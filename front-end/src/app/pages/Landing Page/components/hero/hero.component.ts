import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  faBook = faBook;
}
