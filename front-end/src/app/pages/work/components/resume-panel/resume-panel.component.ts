import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpEvent } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'resume-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resume-panel.component.html',
})
export class ResumePanelComponent {
  @Input() content = '';
}
