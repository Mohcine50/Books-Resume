import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  back() {
    this.location.back();
  }
}
