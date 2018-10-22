import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './books';
import { map } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookInfo: Book[];
  sortData: any;
  constructor(private service: BooksService) { }

  ngOnInit() {
    this.getAuthorInfo();
  }

public getAuthorInfo() {
    this.service.authorInfo().subscribe(data => {
      this.bookInfo = data;
    });
  }

}
