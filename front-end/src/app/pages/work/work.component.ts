import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  styles: ``,
})
export class WorkComponent {}
