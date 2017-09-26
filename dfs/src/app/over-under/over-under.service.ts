import { Injectable, NgModule } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OverUnderService {

  constructor(private http: Http) { }

  getOverUnder() {
    return this.http.get('assets/over_under.json')
        .map(res => res .json());
  }
}
