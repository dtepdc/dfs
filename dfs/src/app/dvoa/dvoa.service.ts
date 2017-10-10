import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DvoaService {

  constructor(private http: Http) { }

  getDvoa() {
    return this.http.get('assets/dvoa.json')
        .map(res => res.json());
  }

}
