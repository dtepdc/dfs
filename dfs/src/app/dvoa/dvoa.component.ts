import { Component, OnInit } from '@angular/core';
import { DvoaService } from './dvoa.service';
import { Dvoa } from './dvoa';

@Component({
  selector: 'app-dvoa',
  templateUrl: './dvoa.component.html',
  styleUrls: ['./dvoa.component.css']
})
export class DvoaComponent implements OnInit {
  stats;
  selected;
  selectedAll;

  constructor(private _http: DvoaService) { }

  ngOnInit() {
    this._http.getDvoa().subscribe(res => this.stats = res);
  }

  selectAll() {
    for (let i = 0; i < this.stats.length; i++) {
      this.stats[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.stats.every(function(item: any) {
        return item.selected === true;
      });
  }

}
