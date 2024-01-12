import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { ResumePanelComponent } from '../resume-panel/resume-panel.component';

@Component({
  selector: 'chapters-panel',
  standalone: true,
  imports: [CommonModule, RouterModule, ResumePanelComponent],
  templateUrl: './chapters-panel.component.html',
  styles: ``,
})
export class ChaptersPanelComponent {
  chapterId?: string;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.chapterId = params['chapter'];
      console.log(this.chapterId);
    });
  }
  ngOnInit(): void {}
}
