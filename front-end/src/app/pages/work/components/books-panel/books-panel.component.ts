import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterModule,
  Router,
  ParamMap,
} from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'books-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './books-panel.component.html',
})
export class BooksPanelComponent {}
