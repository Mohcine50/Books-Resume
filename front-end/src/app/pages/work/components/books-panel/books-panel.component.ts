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
export class BooksPanelComponent {
  books = [
    { name: 'Iron man', id: 'cnsdjcds7chsdu' },
    { name: 'Computer science', id: 'scdjncsdc8sdcj' },
    { name: 'The 100', id: 'sdcjsndjcnsd8sdc' },
    { name: 'Blacklist', id: 'sdcjnsjdcnsdcs' },
    { name: 'harry potter', id: 'sdòcksdocjwq8' },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      console.log(params);
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('id'));
    });
  }

  addBook() {
    this.books.push({ name: 'harry potter', id: 'sdòcksdocjwq8' });
  }
}
