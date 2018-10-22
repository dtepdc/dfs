import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './books';

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
