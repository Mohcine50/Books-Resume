import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { BooksPanelComponent } from './components/books-panel/books-panel.component';
import { ChaptersPanelComponent } from './components/chapters-panel/chapters-panel.component';
import { ResumePanelComponent } from './components/resume-panel/resume-panel.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BooksPanelComponent,
    ChaptersPanelComponent,
    ResumePanelComponent,
  ],
  templateUrl: './work.component.html',
})
export class WorkComponent implements OnInit {
  id?: string = 'kmkdmcksdmcskdm';
  constructor(private route: ActivatedRoute) {
    console.log(this.id);
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
    });
  }
}
