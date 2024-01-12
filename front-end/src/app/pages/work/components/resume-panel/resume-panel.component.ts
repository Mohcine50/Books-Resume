import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'resume-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resume-panel.component.html',
  styles: ``,
})
export class ResumePanelComponent {}
