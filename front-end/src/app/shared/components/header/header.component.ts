import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBookOpen,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  faBookOpen = faBookOpen;
  faRightToBracket = faRightToBracket;
}
