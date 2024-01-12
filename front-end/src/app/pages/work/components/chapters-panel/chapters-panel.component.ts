import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ResumePanelComponent } from '../resume-panel/resume-panel.component';

@Component({
  selector: 'chapters-panel',
  standalone: true,
  imports: [CommonModule, RouterModule, ResumePanelComponent],
  templateUrl: './chapters-panel.component.html',
  styles: ``,
})
export class ChaptersPanelComponent {
  id?: string;
  username?: string;
  constructor(private router: ActivatedRoute) {
    this.router.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.username = params['username'];
      console.log(this.id, this.username);
    });
  }
}
