import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'books-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './books-panel.component.html',
  styles: ``,
})
export class BooksPanelComponent {}
