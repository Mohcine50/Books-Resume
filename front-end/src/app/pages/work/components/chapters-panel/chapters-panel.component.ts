import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'chapters-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chapters-panel.component.html',
  styles: ``,
})
export class ChaptersPanelComponent {}
