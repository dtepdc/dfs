import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book: any = [];

  constructor(private service: BooksService) { }

  ngOnInit() {
    this.getAuthorInfo();
  }

public getAuthorInfo() {
    this.service.authorInfo().pipe(map(response => this.book = response));
  }
}
