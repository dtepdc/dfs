import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './books';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksUrl = 'http://localhost:4200/assets/books.json';

  constructor(public http: HttpClient) { }

  public authorInfo(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }
}
